import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const classes = [
    'button',
    `button--${variant}`,
    fullWidth ? 'button--full-width' : '',
    className
  ].join(' ').trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
