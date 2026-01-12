import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <p className="footer-ethos">
          A Detroit-rooted studio for Black, queer creative transformation.
        </p>
        <p className="footer-location">Detroit, MI</p>
      </div>

      <div className="footer-links">
        <div className="footer-group">
          <p className="footer-label">Navigate</p>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/space">The Space</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-group">
          <p className="footer-label">Connect</p>
          <ul className="footer-list">
            <li>
              <a href="https://www.peerspace.com/pages/listings/682d04fd71ad90bf3ef49acf" target="_blank" rel="noopener noreferrer">
                Peerspace
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/theetherdetroit/#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-meta">
      <p>&copy; {new Date().getFullYear()} THE ETHER DETROIT</p>
    </div>
  </footer>
);

export default Footer;
