import { NavLink, useNavigate, useLocation } from "react-router-dom";
import axiosInstance from '../utils/axiosInstance';
import '../styles/navbar.css';

// NavBar component that renders the navigation menu
export default function NavBar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();
  const location = useLocation();

// Function to handle user logout
  const handleLogout = async () => {
      try {
          await axiosInstance.post('/users/logout');
          setIsAuthenticated(false);
          navigate('/login');
      } catch (error) {
          console.error('Logout failed:', error);
      }
  };

  // Do not render the navbar on the login page
  if (location.pathname === '/login') {
      return null;
  }

// Return the navbar component
  return (
      <header className="navbar-container">
          <div className="logo">
              <NavLink to="/">
                  <img src="/logo.png" alt="Company Logo" />
              </NavLink>
          </div>
          <nav className="navbar">
              <NavLink to="/asset" className={({ isActive }) => isActive ? 'active' : ''}>Asset</NavLink>
              <NavLink to="/operator" className={({ isActive }) => isActive ? 'active' : ''}>Operator</NavLink>
              <NavLink to="/client" className={({ isActive }) => isActive ? 'active' : ''}>Client</NavLink>
              <NavLink to="/allocation" className={({ isActive }) => isActive ? 'active' : ''}>Allocation</NavLink>
              <NavLink to="/user" className={({ isActive }) => isActive ? 'active' : ''}>User</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
              {isAuthenticated && (
                  <button onClick={handleLogout}>Logout</button>
              )}
          </nav>
      </header>
  );
}
