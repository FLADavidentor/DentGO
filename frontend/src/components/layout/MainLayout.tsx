import React from 'react';
import Header from './Header/Header';
import BottomNav from './BottomNav/BottomNav';
import Sidebar from './Sidebar/Sidebar';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__content">
        <Header />
        <main className="layout__main">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
};

export default MainLayout;
