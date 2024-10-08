// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemDetail from '../pages/Main/Item_i_Details';

const Itemiroutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/item/:id" element={<ItemDetail />} />
    </Routes>
  );
};

export default Itemiroutes;
