// src/pages/ItemDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import "../../styles/cards/itemiCard.tsx"

const displayCard: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default displayCard;
