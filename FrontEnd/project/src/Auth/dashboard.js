import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };
  <button
  onClick={() => navigate('/home')}
  style={{
    marginTop: '20px',
    padding: '10px 30px',
    background: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '10px'
  }}>
  Go to Home 🏠
</button>

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#f0f2f5'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h1>🛒 Welcome, {user?.name}!</h1>
        <p>Email: {user?.email}</p>
        <p>Role: <strong>{user?.role}</strong></p>
        <button
          onClick={handleLogout}
          style={{
            marginTop: '20px',
            padding: '10px 30px',
            background: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;