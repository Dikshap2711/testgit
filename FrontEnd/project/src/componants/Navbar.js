import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate('/home')}>
        🛒 <span>QuickGrocery</span>
      </div>
      <div className="navbar-links">
        <button onClick={() => navigate('/home')}>🏠 Home</button>
        <button onClick={() => navigate('/cart')}>🛒 Cart</button>
      </div>
      <div className="navbar-user">
        <span>👤 {user?.name}</span>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;