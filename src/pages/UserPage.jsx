import React, { useEffect, useState } from 'react';
import { fetchUsers, updateUser, deleteUser } from '../utils/userAPI';
import '../styles/userPage.css';

export default function UserPage() {
   const [users, setUsers] = useState([]);
   const [currentUser, setCurrentUser] = useState({
       useremail: '',
       password: '',
       username: '',
       usercompany: ''
   });
   const [selectedUser, setSelectedUser] = useState(null);
   const [isEditing, setIsEditing] = useState(false);

   useEffect(() => {
       loadUsers();
   }, []);

   const loadUsers = async () => {
       try {
           const usersData = await fetchUsers();
           setUsers(usersData || []);
       } catch (error) {
           console.error('Failed to load users:', error);
       }
   };

   const handleUpdateUser = async () => {
       if (selectedUser) {
           try {
               const updatedUser = await updateUser(selectedUser._id, {
                   useremail: selectedUser.useremail,
                   username: selectedUser.username,
                   usercompany: selectedUser.usercompany
               });
               setUsers(users.map(u => u._id === updatedUser._id ? updatedUser : u));
               resetForm();
           } catch (error) {
               console.error('Failed to update user', error);
           }
       }
   };

   const handleDeleteUser = async (id) => {
       try {
           await deleteUser(id);
           setUsers(users.filter(u => u._id !== id));
       } catch (error) {
           console.error('Failed to delete user', error);
       }
   };

   const handleChange = (e) => {
       const { name, value } = e.target;
       if (isEditing && selectedUser) {
           setSelectedUser(prev => ({ ...prev, [name]: value }));
       } else {
           setCurrentUser(prev => ({ ...prev, [name]: value }));
       }
   };

   const handleUserSelection = (user) => {
       setSelectedUser(user);
       setIsEditing(true);
   };

   const resetForm = () => {
       setCurrentUser({
           useremail: '',
           password: '',
           username: '',
           usercompany: ''
       });
       setSelectedUser(null);
       setIsEditing(false);
   };

   return (
       <div className="user-container">
           <section className="user-section">
               <h2>Current Users</h2>
               <ul className="user-list">
                   {users.map(user => (
                       <li key={user._id}>
                           {user.username} - {user.usercompany}
                           <div className="user-actions">
                               <button onClick={() => handleUserSelection(user)}>Edit</button>
                               <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                           </div>
                       </li>
                   ))}
               </ul>
           </section>

           <section className="user-section">
               <h2>{isEditing ? 'Edit User' : 'User Information'}</h2>
               <div className="user-form">
                   <input
                       type="email"
                       name="useremail"
                       value={isEditing ? selectedUser.useremail : currentUser.useremail}
                       onChange={handleChange}
                       placeholder="Email"
                   />
                   <input
                       type="text"
                       name="username"
                       value={isEditing ? selectedUser.username : currentUser.username}
                       onChange={handleChange}
                       placeholder="Username"
                   />
                   <input
                       type="text"
                       name="usercompany"
                       value={isEditing ? selectedUser.usercompany : currentUser.usercompany}
                       onChange={handleChange}
                       placeholder="Company"
                   />
                   <button onClick={isEditing ? handleUpdateUser : resetForm}>
                       {isEditing ? 'Update' : 'Clear'}
                   </button>
                   {isEditing && (
                       <button onClick={resetForm}>
                           Cancel
                       </button>
                   )}
               </div>
           </section>
       </div>
   );
}
