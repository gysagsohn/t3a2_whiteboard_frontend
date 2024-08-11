import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Template from "./pages/_TemplatePage";
import DashboardPage from "./pages/DashboardPage";
import OperatorPage from "./pages/OperatorPage";
import AssetPage from "./pages/AssetPage";
import ClientPage from "./pages/ClientPage";
import AllocationPage from "./pages/AllocationPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import axiosInstance from './utils/axiosInstance';
import ContactPage from './pages/ContactPage';

// Main App component
function App() {
   // Hook to programmatically navigate users
    const navigate = useNavigate();
    // State to track user authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false);

     // useEffect to check if the user is authenticated on component mount
    useEffect(() => {
        const checkAuth = async () => {
            try {
            // Check if the user is authenticated by sending a request to the API
                await axiosInstance.get('/users');
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            // If the user is not authenticated and not on login/signup page, navigate to login
                if (!['/login', '/signup'].includes(window.location.pathname)) {
                    navigate('/login');
                }
            }
        };
    // Call the checkAuth function
        checkAuth();
    // Dependency array to ensure this effect runs on component mount
    }, [navigate]);

    return (
        // Define routes for the application
        <Routes>
            <Route path="/" element={<Template isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} >
                <Route index element={<DashboardPage />} />
                <Route path="operator" element={isAuthenticated ? <OperatorPage /> : <LoginPage />} />
                <Route path="asset" element={isAuthenticated ? <AssetPage /> : <LoginPage />} />
                <Route path="client" element={isAuthenticated ? <ClientPage /> : <LoginPage />} />
                <Route path="allocation" element={isAuthenticated ? <AllocationPage /> : <LoginPage />} />
                <Route path="user" element={isAuthenticated ? <UserPage /> : <LoginPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="contact" element={isAuthenticated ? <ContactPage /> : <LoginPage />} />
            </Route>
        </Routes>
    );
}

export default App;
