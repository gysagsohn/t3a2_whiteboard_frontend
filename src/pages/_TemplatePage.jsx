import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import '../styles/navbar.css';  // Ensure to import the CSS

export default function Template({ isAuthenticated, setIsAuthenticated }) {
    return (
        <div className="app-container">
            <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <div className="content-container">
                <Outlet />
            </div>
        </div>
    );
}
