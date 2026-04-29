import React from 'react';
import './BottomNav.css';

const BottomNav: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav__item bottom-nav__item--active">
        <span className="bottom-nav__icon">🏠</span>
        <span>Inicio</span>
      </div>
      <div className="bottom-nav__item">
        <span className="bottom-nav__icon">📅</span>
        <span>Citas</span>
      </div>
      <div className="bottom-nav__item">
        <span className="bottom-nav__icon">⚙️</span>
        <span>Ajustes</span>
      </div>
    </nav>
  );
};

export default BottomNav;
