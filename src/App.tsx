// src/App.tsx
import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles'; // Import your global styles

import Basicroutes from './routes/Basicroutes';
import Itemiroutes from './routes/Itemiroutes';


const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };


  return (
    <ThemeProvider theme={theme}>
       {/* Apply global styles */}
       <GlobalStyles />
    //or use the reactive value to change class
    <div > 
    <button onClick={toggleTheme} style={{position:'fixed',top:'5px'}}>
  Mode {theme ? 'Light' : 'Dark'}
      </button>
    <Router>
      <Basicroutes />
      <Itemiroutes />
    </Router>
    </div>
    </ThemeProvider>
  );
};

export default App;
