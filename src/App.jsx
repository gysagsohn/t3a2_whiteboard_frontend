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

function App() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axiosInstance.get('/users');
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
                if (!['/login', '/signup'].includes(window.location.pathname)) {
                    navigate('/login');
                }
            }
        };

        checkAuth();
    }, [navigate]);

    return (
        <Routes>
            <Route path="/" element={<Template />} >
                <Route index element={<DashboardPage />} />
                <Route path="operator" element={isAuthenticated ? <OperatorPage /> : <LoginPage />} />
                <Route path="asset" element={isAuthenticated ? <AssetPage /> : <LoginPage />} />
                <Route path="client" element={isAuthenticated ? <ClientPage /> : <LoginPage />} />
                <Route path="allocation" element={isAuthenticated ? <AllocationPage /> : <LoginPage />} />
                <Route path="user" element={isAuthenticated ? <UserPage /> : <LoginPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
            </Route>
        </Routes>
    );
}

export default App;
