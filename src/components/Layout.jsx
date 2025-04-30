// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import footerlogo from '../images/whitecoog.png';
import instagram from '../images/Group 3.png';
import linkedin from '../images/image 10.png';
import discord from '../images/image 11.png';
import './IEEE_NSM.css';

const Layout = ({ children }) => {
  return (
    <div className="ieee-nsm-container">
      <header className="header">
        <div className="logo">
          <img className="logo-img" src={footerlogo} alt="IEEE-NSM logo"/>
          <span className="logo-text">IEEE-NSM</span>
        </div>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="footer-left">
          <img className="logo-img" src={footerlogo} alt="IEEE-NSM logo"/>
          <div className="footer-tag">IEEE-NSM</div>
        </div>
        <div className="footer-social">
          <a target="_blank" href="https://www.instagram.com/ieee_nsm/"><img className="social-icon" src={instagram}/></a>
          <a target="_blank" href="https://www.linkedin.com/company/ieee-nsm/"><img className="social-icon" src={linkedin}/></a>
          <a target="_blank" href="https://discord.gg/nXx9UtEeyy"><img className="social-icon" src={discord}/></a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;