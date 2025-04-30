import React from 'react';
import Layout from './Layout';
import homepagebanner from '../images/ieeensmbanner.png';
import friends from '../images/smilingfriends.png';
import liv from '../images/Oliviasmiling.png';
import doublequotes from '../images/double-quotes.png';
import './IEEE_NSM.css';
import './universal.css';

const IEEE_NSM = () => {
  return (
    <Layout>
      <div className="hero-section">
          <div className="hero-image-container">
            <img src={homepagebanner} alt="Students smiling at Coding Olympics" className="hero-image"/>
            <div className="hero-overlay"></div>
            <div className="hero-text-overlay">
              <h4 className="standard-subtext">
                University of Houston
              </h4>
              <h1 className="opening-text">
                Institute of Electrical<br />
                and Electronics Engineers
              </h1>
            </div>
          </div>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <div className="quote-container">
          <img className="quotes" src={doublequotes}/>
          <p className="mission-text">
            IEEE's core purpose is to foster technological innovation
            and excellence for the We strive to create a space were
            students can find community and more accessible
            opportunities for research and competitions.of humanity.
          </p>
          <img className="quotes" src={doublequotes}/>
          </div>
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
          <form action="https://formsubmit.co/nsm.ieeeuh@gmail.com" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name (required)</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email (required)</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="role">I am...</label>
              <select name="role" id="role">
                <option value="student">A Student</option>
                <option value="sponsor">A Sponsor</option>
                <option value="company representative">A Company Representative</option>
                <option value="alumni">An Alumni</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message (Required)</label>
              <textarea id="message" name="message" rows="4" cols="50">

              </textarea>
            </div>
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>
        </div>
    </Layout>
  );
};

export default IEEE_NSM;