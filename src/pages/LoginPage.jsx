import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import '../styles/loginPage.css';

// Set the root element for modals
Modal.setAppElement('#root');

// Define the LoginPage component
export default function LoginPage() {
    // State variables for managing modal visibility and form inputs
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [usercompany, setUserCompany] = useState('');
    // Initialize the useNavigate hook for page navigation
    const navigate = useNavigate();

    // Function to handle login
    const handleLogin = async () => {
        try {
            // Send a POST request to the login endpoint
            const response = await axiosInstance.post('/users/login', {
                useremail: email,
                password: password
            });
            // Save JWT token to local storage
            localStorage.setItem('jwtToken', response.data.token); 
            // Navigate to Dashboard after login
            navigate('/dashboard'); 
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
        }
    };

    // Function to handle signup
    const handleSignup = async () => {
        try {
            // Send a POST request to the signup endpoint
            const response = await axiosInstance.post('/users/signup', {
                useremail: email,
                password: password,
                username: username,
                usercompany: usercompany
            });
            // Save JWT token to local storage
            localStorage.setItem('jwtToken', response.data.token);  
            // Navigate to Dashboard after signup
            navigate('/dashboard');  
        } catch (error) {
            console.error('Signup failed:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="login-page">
            <div className="left-half">
                <div className="logo-container">
                    <img src="/logo.png" alt="Company Logo" />
                </div>
            </div>
            <div className="right-half">
                <h1>Welcome! Please login or sign up.</h1>
                <div className="button-group">
                    <button onClick={() => setIsLoginModalOpen(true)}>Login</button>
                    <button onClick={() => setIsSignupModalOpen(true)}>Sign Up</button>
                </div>
            </div>

            <Modal
                isOpen={isLoginModalOpen}
                onRequestClose={() => setIsLoginModalOpen(false)}
                contentLabel="Login Modal"
            >
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
                <button onClick={() => setIsLoginModalOpen(false)}>Close</button>
            </Modal>

            <Modal
                isOpen={isSignupModalOpen}
                onRequestClose={() => setIsSignupModalOpen(false)}
                contentLabel="Signup Modal"
            >
                <h2>Sign Up</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Company Name"
                    value={usercompany}
                    onChange={(e) => setUserCompany(e.target.value)}
                />
                <button onClick={handleSignup}>Sign Up</button>
                <button onClick={() => setIsSignupModalOpen(false)}>Close</button>
            </Modal>
        </div>
    );
}
