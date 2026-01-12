import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoTeal from '../assets/the_ether_teal.png';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo / Site Title */}
        <div className="logo">
          <Link to="/" className="logo-link" onClick={handleCloseMenu}>
            <img src={logoTeal} alt="THE ETHER DETROIT" className="logo-image" />
          </Link>
        </div>

        {/* Navigation */}
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={handleToggleMenu}
        >
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
        </button>
        <nav className={`nav ${isMenuOpen ? 'is-open' : ''}`}>
          <ul className="nav-list">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/" onClick={handleCloseMenu}>Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link to="/about" onClick={handleCloseMenu}>About</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/space' ? 'active' : ''}`}>
              <Link to="/space" onClick={handleCloseMenu}>The Space</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/community' ? 'active' : ''}`}>
              <Link to="/community" onClick={handleCloseMenu}>Community</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/membership' ? 'active' : ''}`}>
              <Link to="/membership" onClick={handleCloseMenu}>Membership</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
              <Link to="/contact" onClick={handleCloseMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
