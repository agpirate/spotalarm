import React, { createContext, useState, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, Theme } from '../styles/theme';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
