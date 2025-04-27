import React from 'react';
import './IEEE_NSM.css'; // We'll create this CSS file next

const IEEE_NSM = () => {
  return (
    <div className="ieee-nsm-container">
      <header className="header">
        <div className="logo">IEEE-NSM</div>
        <nav className="navigation">
          <a href="#">Home</a>
          <a href="#">Officers</a>
          <a href="#">About</a>
          <a href="#">Events</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <h1 className="institute-name">
            Institute of Electrical<br />
            and Electronics
          </h1>
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

        <div className="cta-section">
          <button className="cta-button">Become a Member</button>
          <button className="cta-button">Contact Us</button>
        </div>

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
      </main>

      <footer className="footer">
        <div className="footer-logo">IEEE-NSM</div>
      </footer>
    </div>
  );
};

export default IEEE_NSM;