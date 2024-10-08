// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Basicroutes from './routes/Basicroutes';
import Itemiroutes from './routes/Itemiroutes';
import indexroutes from './routes/index';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Basicroutes />
      <Itemiroutes />
    </Router>
  );
};

export default App;
