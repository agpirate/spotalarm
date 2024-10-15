// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add styles here

const Navbar: React.FC = () => {
  return (

    <header className="header">
    <h1>App Name</h1>
    <input type="text" placeholder="Search..." />
    <div className="user-actions">
      <button>Notifications</button>
      <button>Profile</button>

      <Link to="/">Home</Link>
      <li><a href="/">Home</a></li>
    </div>
  </header>
  );
};

export default Navbar;

