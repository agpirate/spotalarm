import React from 'react';
import Card from '../../components/cards/displayCard.tsx';

const App: React.FC = () => {
  return (
    <div>
      <h1>My App</h1>
      <Card title="Card Title 1" content="This is some example content for the card." />
      <Card title="Card Title 2" content="This is some more example content for another card." />
    </div>
  );
};

export default App;
