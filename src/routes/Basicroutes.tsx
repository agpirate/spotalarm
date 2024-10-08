// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Homelayout.tsx';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound';

const Basicroutes: React.FC = () => {
  return (  
    <Routes>
      <Route path="/" element={<Layout />}>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} /> {/* Handles 404 */}
    </Routes>
  );
};

export default Basicroutes;
