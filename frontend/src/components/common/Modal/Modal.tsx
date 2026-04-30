import React, { useEffect } from 'react';
import IconButton from '../Button/IconButton';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  centerText?: boolean;
}

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.25rem', height: '1.25rem' }}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, centerText = true }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-handle" />
        <div className="modal-header">
          <div className="modal-header__spacer" /> {/* For balancing center title */}
          {title && <h2 className={`modal-title ${centerText ? 'modal-title--center' : ''}`}>{title}</h2>}
          <IconButton 
            icon={<XIcon />} 
            onClick={onClose} 
            size="sm" 
            variant="plain" 
            className="modal-close-btn"
            aria-label="Cerrar"
          />
        </div>
        <div className={`modal-content ${centerText ? 'modal-content--center' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
