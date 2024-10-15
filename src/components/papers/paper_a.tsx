// Card.js
import React from 'react';
import './Card.css'; // Import the CSS file

const Card = ({ header, title, content, footer, fontFamily }) => {
  return (
    <div className="card-container" style={{ fontFamily }}>
      <div className="card-header">{header}</div>
      <h2 className="card-title">{title}</h2>
      <div className="card-content">{content}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
};

export default Card;
