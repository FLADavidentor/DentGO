import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">DentGO</div>
      <div className="header__actions">
        {/* Actions like Profile or Notifications could go here */}
      </div>
    </header>
  );
};

export default Header;
