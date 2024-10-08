// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/item/1">Item 1</Link>
      <Link to="/item/2">Item 2</Link>
    </nav>
  );
};

export default Navbar;
