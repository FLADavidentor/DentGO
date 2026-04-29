import React from 'react';
import './Card.css';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  interactive?: boolean;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  interactive = false,
  className = '',
  onClick
}) => {
  const classes = [
    'card',
    interactive ? 'card--interactive' : '',
    className
  ].join(' ').trim();

  return (
    <div className={classes} onClick={onClick}>
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__content">
        {children}
      </div>
    </div>
  );
};

export default Card;
