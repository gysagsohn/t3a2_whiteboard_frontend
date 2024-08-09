import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

Modal.setAppElement('#root');

export default function LoginPage() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [usercompany, setUserCompany] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axiosInstance.post('/users/login', {
                useremail: email,
                password: password
            });
            // Store the JWT token in localStorage
            localStorage.setItem('jwtToken', response.data.token);
            // Navigate to the main page after login
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
        }
    };

    const handleSignup = async () => {
        try {
            const response = await axiosInstance.post('/users', {
                useremail: email,
                password: password,
                username: username,
                usercompany: usercompany
            });
            // Store the JWT token in localStorage
            localStorage.setItem('jwtToken', response.data.token);
            // Navigate to the main page after signup
            navigate('/');
        } catch (error) {
            console.error('Signup failed:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div>
            <h1>Welcome! Please login or sign up.</h1>
            <button onClick={() => setIsLoginModalOpen(true)}>Login</button>
            <button onClick={() => setIsSignupModalOpen(true)}>Sign Up</button>

            {/* Login Modal */}
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

            {/* Signup Modal */}
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
