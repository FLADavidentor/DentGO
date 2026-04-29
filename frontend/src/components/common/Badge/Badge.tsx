import React from 'react';
import './Badge.css';

export type BadgeStatus = 'pending' | 'confirmed' | 'assigned' | 'cancelled';

interface BadgeProps {
  status: BadgeStatus;
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ status, label }) => {
  return (
    <span className={`badge badge--${status}`}>
      {label}
    </span>
  );
};

export default Badge;
