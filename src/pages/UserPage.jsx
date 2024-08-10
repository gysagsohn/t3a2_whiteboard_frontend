import React, { useEffect, useState } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../utils/userAPI';
import { useNavigate } from 'react-router-dom';

export default function UserPage() {
    // State to manage the list of users fetched from the API
    const [users, setUsers] = useState([]);

    // State to manage the current user being created or edited
    const [currentUser, setCurrentUser] = useState({
        useremail: '',
        password: '',
        username: '',
        usercompany: ''
    });

    // State to track if the form is in editing mode or creating mode
    const [isEditing, setIsEditing] = useState(false);

    // Hook from react-router-dom to programmatically navigate the user to different routes
    const navigate = useNavigate();

    // useEffect hook to load users when the component mounts
    useEffect(() => {
        loadUsers();
    }, []);

    // Function to load users from the backend API
    const loadUsers = async () => {
        try {
            const usersData = await fetchUsers();
            setUsers(usersData); // Set the fetched users in the state
        } catch (error) {
            console.error('Failed to load users:', error);
        }
    };

    // Function to handle form submission (either creating or updating a user)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Determine whether to create or update the user based on isEditing state
            const response = isEditing ? await updateUser(currentUser._id, {
                // Update the user without changing the password unless specified
                useremail: currentUser.useremail,
                username: currentUser.username,
                usercompany: currentUser.usercompany
            }) : await createUser(currentUser);

            // Update the users list based on whether we created or updated a user
            setUsers(isEditing ? users.map(user => user._id === response._id ? response : user) : [...users, response]);

            // Reset the form after submission
            resetForm();
        } catch (error) {
            console.error('Failed to submit user:', error);
        }
    };

    // Function to handle input changes in the form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update the currentUser state with the new input values
        setCurrentUser(prev => ({ ...prev, [name]: value }));
    };

    // Function to reset the form fields and exit editing mode
    const resetForm = () => {
        setCurrentUser({
            useremail: '',
            password: '',
            username: '',
            usercompany: ''
        });
        setIsEditing(false);
    };

    // Function to handle user logout
    const logoutUser = () => {
        // Clear the JWT token from localStorage (or sessionStorage, depending on your setup)
        localStorage.removeItem('jwtToken');  // Adjust this if you're using sessionStorage
        // Redirect the user to the login page after logging out
        navigate('/login');
    };

    return (
        <div>
            <h1>User Management</h1>
            {/* Form to create or update a user */}
            <form onSubmit={handleSubmit}>
                <input 
                    name="useremail" 
                    value={currentUser.useremail} 
                    onChange={handleChange} 
                    placeholder="Email" 
                />
                <input 
                    name="password" 
                    value={currentUser.password} 
                    onChange={handleChange} 
                    placeholder="Password" 
                    type="password" 
                />
                <input 
                    name="username" 
                    value={currentUser.username} 
                    onChange={handleChange} 
                    placeholder="Username" 
                />
                <input 
                    name="usercompany" 
                    value={currentUser.usercompany} 
                    onChange={handleChange} 
                    placeholder="Company" 
                />
                <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
            </form>

            {/* List of existing users with edit and delete options */}
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.username} - {user.usercompany}
                        {/* Button to start editing a user */}
                        <button onClick={() => { setCurrentUser({ ...user, password: '' }); setIsEditing(true); }}>
                            Edit
                        </button>
                        {/* Button to delete a user */}
                        <button onClick={() => deleteUser(user._id).then(() => setUsers(users.filter(u => u._id !== user._id)))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            
            {/* Logout button to log the user out and redirect to login page */}
            <button onClick={logoutUser}>Logout</button>
        </div>
    );
}
