import React from 'react';
import Header from '../components/layouts/Header';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import Sidebar from '../components/layouts/Sidebar.tsx';
// import './MainLayout.css'; // Add styles here
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
         <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
