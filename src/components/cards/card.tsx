import React from 'react';
import '../../styles/cards/itemiCard.css'; // Import the CSS file

interface CardProps {
  image?: string;
  header?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ header, image, children, footer, variant = 'default' }) => {
  return (
    <div className={`card ${variant}`}>
      {image && <img src={image} alt={header} className="card-image" loading="lazy" />}
      <div className="card-content">
        {header && <div className="card-title">{header}</div>}
        <p className="card-description">{children}</p>
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
