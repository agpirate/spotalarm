// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

 const GlobalStyles = createGlobalStyle`
   //----------------------------------------
  // Global them(D/L) Based Derivative_Variables (active)
  :root {
    --primary-color: ${({ theme }) => theme.colors.primary};
    --secondary-color: ${({ theme }) => theme.colors.secondary};

    --text-color: ${({ theme }) => theme.colors.text};

    --small-screen :'${({ theme }) => theme.screenSize.xs}';
    --medium-screen :${({ theme }) => theme.screenSize.md};
    --large-screen :${({ theme }) => theme.screenSize.lg};
  }
  /* Example Button Styles */

/* Responsive Styling */
@media (max-width: var(--small-screen)) {
 :root {
    --spacing: 12px;
    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-large: 24px;

    --font-family: 'Arial', sans-serif;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    --font-size-base: 16px;
    --font-size-lg: 24px;
    --font-size-sm: 14px;
}
}

@media (min-width: var(--medium-screen)) {
 :root {
    --spacing: 12px;
    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-large: 24px;

    --font-family: 'Arial', sans-serif;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    --font-size-base: 16px;
    --font-size-lg: 24px;
    --font-size-sm: 14px;
}}

@media (min-width: var(--large-screen)) {
 :root {
    --spacing: 12px;
    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-large: 24px;

    --font-family: 'Arial', sans-serif;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    --font-size-base: 16px;
    --font-size-lg: 24px;
    --font-size-sm: 14px;
}
}


//----------------------------------------
  // Global Styles

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    background-color: var(--primary-color);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--primary-color);
    margin-bottom: var(--spacing);
  }

  p {
    color: var(--text-color);
    font-size: var(--font-sizemd);
  }
  
`;


export default GlobalStyles