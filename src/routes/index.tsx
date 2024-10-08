// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';

const Basicroutes: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} /> {/* Handles 404 */}
    </Routes>
  );
};

export default Basicroutes;
