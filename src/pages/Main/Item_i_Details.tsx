// src/pages/ItemDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
