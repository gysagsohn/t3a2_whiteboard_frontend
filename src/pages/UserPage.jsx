import React, { useEffect, useState } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../utils/userAPI';

export default function UserPage() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({
        useremail: '',
        password: '',
        username: '',
        usercompany: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const usersData = await fetchUsers();
            setUsers(usersData);
        } catch (error) {
            console.error('Failed to load users:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = isEditing ? await updateUser(currentUser._id, {
                // Update without password change unless specified
                useremail: currentUser.useremail,
                username: currentUser.username,
                usercompany: currentUser.usercompany
            }) : await createUser(currentUser);
            setUsers(isEditing ? users.map(user => user._id === response._id ? response : user) : [...users, response]);
            resetForm();
        } catch (error) {
            console.error('Failed to submit user:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser(prev => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setCurrentUser({
            useremail: '',
            password: '',
            username: '',
            usercompany: ''
        });
        setIsEditing(false);
    };

    return (
        <div>
            <h1>User Management</h1>
            <form onSubmit={handleSubmit}>
                <input name="useremail" value={currentUser.useremail} onChange={handleChange} placeholder="Email" />
                <input name="password" value={currentUser.password} onChange={handleChange} placeholder="Password" type="password" />
                <input name="username" value={currentUser.username} onChange={handleChange} placeholder="Username" />
                <input name="usercompany" value={currentUser.usercompany} onChange={handleChange} placeholder="Company" />
                <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
            </form>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.username} - {user.usercompany}
                        <button onClick={() => { setCurrentUser({ ...user, password: '' }); setIsEditing(true); }}>Edit</button>
                        <button onClick={() => deleteUser(user._id).then(() => setUsers(users.filter(u => u._id !== user._id)))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
