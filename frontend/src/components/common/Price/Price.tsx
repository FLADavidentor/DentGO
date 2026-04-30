import React from 'react';
import './Price.css';

interface PriceProps {
  amount: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Price: React.FC<PriceProps> = ({ 
  amount, 
  currency = 'C$', 
  size = 'md',
  className = ''
}) => {
  const integerPart = Math.floor(amount).toLocaleString();
  const decimalPart = (amount % 1).toFixed(2).substring(1);

  return (
    <div className={`price price--${size} ${className}`}>
      <span className="price__currency">{currency}</span>
      <span className="price__integer">{integerPart}</span>
      <span className="price__decimals">{decimalPart}</span>
    </div>
  );
};

export default Price;
