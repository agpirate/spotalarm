// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Itemilayout.tsx';
import ItemDetail from '../pages/Main/contenting.tsx';

const Itemiroutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/item/:id" element={<ItemDetail />} />
      </Route>
    </Routes>
  );
};

export default Itemiroutes;
