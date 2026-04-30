import React from 'react';
import './LogoLockup.css';

interface LogoLockupProps {
  size?: 'sm' | 'md' | 'lg';
  secondaryLogos?: string[];
}

const LogoLockup: React.FC<LogoLockupProps> = ({ 
  size = 'md', 
  secondaryLogos = []
}) => {
  return (
    <div className={`logo-lockup logo-lockup--${size}`}>
      <div className="logo-lockup__main">
        <img src="/logos/DentMatch.svg" alt="DentMatch" className="logo-lockup__symbol-img" />
        <div className="logo-lockup__badges">
          {secondaryLogos.map((logo, index) => (
            <div key={index} className="logo-lockup__badge" style={{ zIndex: 10 - index }}>
              <img src={logo} alt={`Institution ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoLockup;
