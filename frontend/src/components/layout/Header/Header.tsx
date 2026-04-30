import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import LogoLockup from '../../common/Logo/LogoLockup';
import IconButton from '../../common/Button/IconButton';
import './Header.css';

const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const pathnames = location.pathname.split('/').filter((x) => x);
  const isRoot = pathnames.length <= 1;

  // Simple breadcrumb generator
  const breadcrumbs = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    const isLast = index === pathnames.length - 1;
    const label = value.charAt(0).toUpperCase() + value.slice(1);

    return (
      <React.Fragment key={to}>
        <span className="header__breadcrumb-separator">/</span>
        {isLast ? (
          <span className="header__breadcrumb-current">{label}</span>
        ) : (
          <Link to={to} className="header__breadcrumb-link">{label}</Link>
        )}
      </React.Fragment>
    );
  });

  return (
    <header className="header">
      {/* Desktop Left: Logo + Breadcrumbs */}
      <div className="header__left header__left--desktop">
        <LogoLockup size="sm" secondaryLogos={['/logos/universidad_americana_2020.webp']} />
        <nav className="header__breadcrumbs">
          <Link to="/" className="header__breadcrumb-link">Inicio</Link>
          {breadcrumbs}
        </nav>
      </div>

      {/* Mobile Left: Back Button or Logo */}
      <div className="header__left header__left--mobile">
        {!isRoot ? (
          <button className="header__back-btn" onClick={() => navigate(-1)}>
            <BackIcon />
            <span>Atrás</span>
          </button>
        ) : (
          <LogoLockup size="sm" secondaryLogos={['/logos/universidad_americana_2020.webp']} />
        )}
      </div>

      {/* Mobile Center: Title */}
      <div className="header__center header__center--mobile">
        <span className="header__mobile-title">
          {pathnames[pathnames.length - 1]?.charAt(0).toUpperCase() + pathnames[pathnames.length - 1]?.slice(1) || 'DentMatch'}
        </span>
      </div>

      {/* Right Side: Shared Actions */}
      <div className="header__right">
        <div className="header__action-item">
          <IconButton icon={<BellIcon />} variant="ghost" size="sm" aria-label="Notificaciones" />
          <span className="header__notification-badge" />
        </div>
        <div className="header__profile-trigger">
          <span className="header__profile-initials">JC</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
