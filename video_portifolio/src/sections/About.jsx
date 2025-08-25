import React from 'react';
import profileImage from '../assets/profile.svg';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="about-name">ROHITH C R</p>
          <p className="about-description">
            I'm a passionate video editor with over 3 years of experience in creating compelling visual stories. From music videos to corporate content, I bring creativity and technical expertise to every project.
          </p>
          <ul className="skills-list">
            <li>Video Editing</li>
            <li>Poster Design</li>
            <li>Logo Design</li>
            <li>Text Animation</li>
            <li>Script Writing</li>
            <li>AI video cretor</li>
          </ul>
        </div>
        <div className="about-visual">
          <div className="profile-visual">
            <img src={profileImage} alt="Rohith CR Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


