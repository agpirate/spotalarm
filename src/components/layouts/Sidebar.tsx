import React from 'react';
import '../../styles/Sidebar.css'; // Add styles here

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/videos">Videos</a></li>
        <li><a href="/profile">Profile</a></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Sidebar;
