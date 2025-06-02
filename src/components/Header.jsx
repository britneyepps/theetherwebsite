import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo / Site Title */}
        <div className="logo">
          <Link to="/" className="logo-link">
            The Ether Detroit
          </Link>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
