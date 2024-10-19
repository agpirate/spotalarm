// theme.js
export const lightTheme = {
  colors: {
    primary: '#ffffff',
    secondary: '#f8f9fa',
    text: '#333333',
  },

  screenSize : {
    xs: '16px',
    md: '16px',
    lg: '16px',
  }
  }

  export const darkTheme = {
  colors: {
    primary: '#333333',
    secondary: '#444444',
    text: '#ffffff',
  },
  screenSize : {
    xs: '16px',
    md: '16px',
    lg: '16px',
  }
};
export type Theme = typeof lightTheme;

// export { lightTheme, darkTheme };
