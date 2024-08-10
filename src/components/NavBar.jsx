import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from '../utils/axiosInstance';

export default function NavBar({ isAuthenticated, setIsAuthenticated }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axiosInstance.post('/users/logout');
            setIsAuthenticated(false);
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <header>
            <div id="logo">
                WhiteBoard Scheduler
            </div>
            <nav id="navbar">
                <NavLink to={"/"}> Dashboard </NavLink>
                <NavLink to={"/operator"}> Operator </NavLink>
                <NavLink to={"/asset"}> Asset </NavLink>
                <NavLink to={"/client"}> Client </NavLink>
                <NavLink to={"/allocation"}> Allocation </NavLink>
                <NavLink to={"/user"}> User </NavLink>
                {isAuthenticated ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <NavLink to={"/login"}>Login</NavLink>
                )}
            </nav>
        </header>
    );
}
