// src/pages/ItemDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import "../../styles/cards/itemiCard.tsx"


const ItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Simulating data fetching based on the ID
  const itemData = {
    1: { title: 'Item 1', description: 'Details about Item 1' },
    2: { title: 'Item 2', description: 'Details about Item 2' },
  };

  const item = itemData[id ?? 0];

  if (!item) {
    return <h2>Item not found!</h2>;
  }

  return (
    <div className="card">
      <h1 className="card-title">{item.title}</h1>
      <p className="card-content">{item.description}</p>
    </div>
  );
};

export default ItemDetail;
