import React, { useEffect } from 'react';
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

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axiosInstance.get('/users'); // Hit a protected route
            } catch (err) {
                navigate('/login');
            }
        };

        checkAuth();
    }, [navigate]);

    return (
        <Routes>
            <Route path="/" element={<Template />} >
                <Route index element={<DashboardPage />} />
                <Route path="operator" element={<OperatorPage />} />
                <Route path="asset" element={<AssetPage />} />
                <Route path="client" element={<ClientPage />} />
                <Route path="allocation" element={<AllocationPage />} />
                <Route path="user" element={<UserPage />} />
                <Route path="login" element={<LoginPage />} />
            </Route>
        </Routes>
    );
}

export default App;
