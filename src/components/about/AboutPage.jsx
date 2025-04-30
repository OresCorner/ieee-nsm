import React from 'react';
import Layout from '../Layout';
import placeholder from '../../images/hijabi-scientist.webp';
import '../universal.css';
import '../about/AboutPage.css';

const About = () => {
    return(
        <Layout>
            <section class="hero-section">
                <div class="hero-text">
                    <h1>Who We Are</h1>
                    <p>
                        We’re IEEE NSM — a student-led organization for CS students in the 
                        Natural Sciences and Math college at UH. We host coding competitions, workshops, and help connect students
                        with research opportunities. Whether you’re new to code or training for ICPC, we’re here to help you grow your skills, explore your passions,
                        and meet like-minded students.
                    </p>
                </div>
                <div class="hero-img">
                    <img src={placeholder} alt="IEEE NSM group photo"/>
                </div>
            </section>
            <section class="meet-officers">
                <h2>Meet Our Officer Board</h2>
                <div className="officers-grid">
                    <div className="officers-card">
                        <img src={placeholder} alt="Officer"/>
                        <h3>Officer Name</h3>
                        <p>Position</p>
                    </div>
                    <div className="officers-card">
                        <img src={placeholder} alt="Officer"/>
                        <h3>Officer Name</h3>
                        <p>Position</p>
                    </div>
                    <div className="officers-card">
                        <img src={placeholder} alt="Officer"/>
                        <h3>Officer Name</h3>
                        <p>Position</p>
                    </div>
                    <div className="officers-card">
                        <img src={placeholder} alt="Officer"/>
                        <h3>Officer Name</h3>
                        <p>Position</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;