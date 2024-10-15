// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add styles here

const Navbar: React.FC = () => {
  return (

    <header className="navbar">
    <h1>App Name</h1>
    <input type="text" placeholder="Search..." />
    <div className="user-actions">
      <button>Notifications</button>
      <button>Profile</button>

      <Link to="/">Home</Link>
      <li><a href="/">Home</a></li>
      <Link to="/about">About</Link>
      <Link to="/item/1">Item 1</Link>
      <Link to="/item/2">Item 2</Link>
    </div>
  </header>
  );
};

export default Navbar;

