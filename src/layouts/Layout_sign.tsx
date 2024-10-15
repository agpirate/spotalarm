import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import Sidebar from '../components/layouts/Sidebar.tsx';
import '../styles/MainLayout.css'; // Add styles here

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
