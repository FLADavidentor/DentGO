import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h2>DentGO</h2>
      </div>
      <nav className="sidebar__nav">
        <a href="#" className="sidebar__link sidebar__link--active">
          <span>🏠</span> Inicio
        </a>
        <a href="#" className="sidebar__link">
          <span>📅</span> Citas
        </a>
        <a href="#" className="sidebar__link">
          <span>📋</span> Procedimientos
        </a>
        <a href="#" className="sidebar__link">
          <span>⚙️</span> Ajustes
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
