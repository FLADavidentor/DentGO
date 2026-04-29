import React from 'react';
import './Select.css';

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  error?: string;
  fullWidth?: boolean;
}

const Select: React.FC<SelectProps> = ({ 
  label, 
  options, 
  error, 
  fullWidth = true, 
  className = '', 
  id,
  ...props 
}) => {
  const selectId = id || `select-${label?.replace(/\s+/g, '-').toLowerCase()}`;
  
  const containerClasses = [
    'select-container',
    fullWidth ? 'select-container--full-width' : '',
    className
  ].join(' ').trim();

  const selectClasses = [
    'select',
    error ? 'select--error' : ''
  ].join(' ').trim();

  return (
    <div className={containerClasses}>
      {label && <label htmlFor={selectId} className="select-label">{label}</label>}
      <div className="select-wrapper">
        <select 
          id={selectId}
          className={selectClasses}
          {...props} 
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="select-arrow">▼</span>
      </div>
      {error && <span className="select-error-text">{error}</span>}
    </div>
  );
};

export default Select;
