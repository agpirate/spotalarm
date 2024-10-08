// src/App.tsx
import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Basicroutes from './routes/Basicroutes';
import Itemiroutes from './routes/Itemiroutes';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  //or useEffect to change the document top_class lists 
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    //or use the reactive value to change class
    <div className={isDarkMode ? 'dark' : 'light'}> 
    <button onClick={toggleTheme} style={{position:'fixed',top:'5px'}}>
  Mode {isDarkMode ? 'Light' : 'Dark'}
      </button>


    <Router>
      <Navbar />
      <Basicroutes />
      <Itemiroutes />
    </Router>
    </div>
  );
};

export default App;
