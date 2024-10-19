// src/App.tsx
import React, {createContext, useContext, useState,useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ThemeProvider, { ThemeContext } from './context/themContext';
import GlobalStyles from './styles/GlobalStyles'; // Import your global styles

import Basicroutes from './routes/Basicroutes';
import Itemiroutes from './routes/Itemiroutes';


const AppContent = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { toggleTheme, isDarkMode } = themeContext;
  const fixedStyle = {
    position: 'fixed', // Correct way to set fixed position
    top: '10px',       // Distance from the top of the viewport
    right: '10px',     // Distance from the right of the viewport

    backgroundColor: 'lightblue', // Background color
    color: 'black',     // Text color
    zIndex: 1000,      // Layering on top of other elements
  };

  return (
    <div style={fixedStyle}>
        <button onClick={toggleTheme} >
           {isDarkMode ? 'Light' : 'Dark'} 
           </button>
      </div>
  );
};
const App: React.FC = () => {

  return (
  //  wrap all style-component && it's definitions of them && provided across components/pages
    <ThemeProvider>
      {/* inject global styles */}
        <GlobalStyles /> 
        {/* styles_theme switcher action_component(button) */}
        <AppContent />
    {/* Routing layouts_xy(pagex,pagey)  ... */}
       <Router> 
           <Basicroutes />
      </Router> 
    </ThemeProvider>
  );
};

export default App;
