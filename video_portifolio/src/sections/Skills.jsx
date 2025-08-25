import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-columns">
          <section className="skills-column" aria-labelledby="my-skills-title">
            <h2 className="section-title" id="my-skills-title">My Skills</h2>
            <ul className="skills-list">
              <li>Video Editing</li>
              <li>Poster Design</li>
              <li>Logo Design</li>
              <li>Text Animation</li>
              <li>Script Writing</li>
              <li>AI video creator</li>
            </ul>
          </section>
          <section className="skills-column" aria-labelledby="software-knows-title">
            <h2 className="section-title" id="software-knows-title">Software Knows</h2>
            <ul className="software-list" aria-label="Software tools">
              {[
                'DaVinci Resolve',
                'Adobe Photoshop',
                'Canva',
                'Figma',
                'CapCut',
                'Adobe After Effects',
              ].map(name => (
                <li key={name}>
                  <button type="button" className="software-chip" aria-label={name}>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Skills;



