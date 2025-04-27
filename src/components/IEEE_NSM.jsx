import React from 'react';
import footerlogo from '../images/whitecoog.png';
import homepagebanner from '../images/ieeensmbanner.png';
import friends from '../images/smilingfriends.png';
import liv from '../images/Oliviasmiling.png';
import './IEEE_NSM.css'; // We'll create this CSS file next

const IEEE_NSM = () => {
  return (
    <div className="ieee-nsm-container">
      <header className="header">
        <div className="logo">
          <img className="logo-img" src={footerlogo} alt="IEEE-NSM logo"/>
          <span className="logo-text">IEEE-NSM</span>
        </div>
        <nav className="navigation">
          <a href="#">Home</a>
          <a href="#">Officers</a>
          <a href="#">About</a>
          <a href="#">Events</a>
        </nav>
      </header>

      <main className="main-content">
      <div className="hero-section">
          <div className="hero-image-container">
            <img src={homepagebanner} alt="Students smiling at Coding Olympics" className="hero-image"/>
            <div className="hero-overlay"></div>
            <div className="hero-text-overlay">
              <h4 className="institute-subtext">
                University of Houston
              </h4>
              <h1 className="institute-name">
                Institute of Electrical<br />
                and Electronics
              </h1>
            </div>
          </div>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p className="mission-text">
            IEEE's core purpose is to foster technological innovation
            and excellence for the We strive to create a space were
            students can find community and more accessible
            opportunities for research and competitions.of humanity.
          </p>
        </div>

        <div className="img-section">
          <img src={liv}/>
          <img src={friends}/>
        </div>

        <div className="cta-section">
          <button className="cta-button">Become a Member</button>
        </div>
        <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name (required)</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email (required)</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="role">I am...</label>
              <select id="role">
                <option value="student">Student</option>
                <option value="professional">Professional</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>
        </div>
      </main>

      <footer className="footer">
      <img className="logo-img" src={footerlogo} alt="IEEE-NSM logo"/>
        <div className="footer-tag">IEEE-NSM</div>
        
      </footer>
    </div>
  );
};

export default IEEE_NSM;