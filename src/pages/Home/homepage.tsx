// src/pages/HomePage.tsx
import React from 'react';
import Button from '../../components/widgets/Button.tsx';

const HomePage = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Button label="Click Me" onClick={handleClick} />

    </div>
  );
};

export default HomePage;
