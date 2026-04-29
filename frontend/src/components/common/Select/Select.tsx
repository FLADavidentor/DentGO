import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Select.css';

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  error?: string;
  fullWidth?: boolean;
  placeholder?: string;
  className?: string;
  id?: string;
}

const Select: React.FC<SelectProps> = ({ 
  label, 
  options, 
  value,
  onChange,
  error, 
  fullWidth = true, 
  placeholder = 'Seleccionar...',
  className = '', 
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectId = id || `select-${label?.replace(/\s+/g, '-').toLowerCase()}`;
  
  const selectedOption = options.find(opt => opt.value === value);

  const containerClasses = [
    'select-container',
    fullWidth ? 'select-container--full-width' : '',
    className
  ].join(' ').trim();

  const triggerClasses = [
    'select-trigger',
    error ? 'select-trigger--error' : '',
    !selectedOption ? 'select-trigger--placeholder' : ''
  ].join(' ').trim();

  const handleOptionClick = (optValue: string | number) => {
    onChange?.(optValue);
    setIsOpen(false);
  };

  return (
    <div className={containerClasses}>
      {label && <label htmlFor={selectId} className="select-label">{label}</label>}
      
      <div 
        id={selectId}
        className={triggerClasses}
        onClick={() => setIsOpen(true)}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={0}
      >
        <span className="select-trigger__text">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="select-trigger__icon">▼</span>
      </div>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title={label || 'Seleccionar opción'}
      >
        <ul className="select-options-list" role="listbox">
          {options.map((opt) => (
            <li 
              key={opt.value} 
              className={`select-option-item ${opt.value === value ? 'select-option-item--selected' : ''}`}
              onClick={() => handleOptionClick(opt.value)}
              role="option"
              aria-selected={opt.value === value}
            >
              {opt.label}
              {opt.value === value && <span className="select-option-item__check">✓</span>}
            </li>
          ))}
        </ul>
      </Modal>

      {error && <span className="select-error-text">{error}</span>}
    </div>
  );
};

export default Select;
