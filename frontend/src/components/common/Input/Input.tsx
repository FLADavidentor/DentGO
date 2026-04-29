import React from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  fullWidth = true, 
  className = '', 
  id,
  ...props 
}) => {
  const inputId = id || `input-${label?.replace(/\s+/g, '-').toLowerCase()}`;
  
  const containerClasses = [
    'input-container',
    fullWidth ? 'input-container--full-width' : '',
    className
  ].join(' ').trim();

  const inputClasses = [
    'input',
    error ? 'input--error' : ''
  ].join(' ').trim();

  return (
    <div className={containerClasses}>
      {label && <label htmlFor={inputId} className="input-label">{label}</label>}
      <input 
        id={inputId}
        className={inputClasses}
        {...props} 
      />
      {error && <span className="input-error-text">{error}</span>}
    </div>
  );
};

export default Input;
