// src/pages/HomePage.tsx
import React from 'react';
import Button from '../components/widgets/Buttons.tsx';

const HomePage = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={handleClick} primary='blue'>Click Me</Button>
    </div>
  );
};

export default HomePage;
