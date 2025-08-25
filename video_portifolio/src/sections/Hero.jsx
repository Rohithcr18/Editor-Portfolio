import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="section hero-section" id="hero">
      <div className="hero-content">
        <h1 className="hero-title" id="heroTitle">ROHITH C R</h1>
        <p className="hero-subtitle" id="heroSubtitle">Video Editor & Poster Designer</p>
        <p className="hero-description" id="heroDescription">
          Creating compelling visual narratives that engage, inspire, and leave lasting impressions through innovative editing techniques and creative storytelling.
        </p>
        {/* Social links above CTA */}
        <div className="social-links">
          <a
            className="social-btn"
            href="https://www.linkedin.com/in/rohithcr2006/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            {/* LinkedIn icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.944v5.662H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.267 2.371 4.267 5.455v6.288zM5.337 7.433a2.064 2.064 0 1 1 0-4.129 2.064 2.064 0 0 1 0 4.129zM7.114 20.452H3.558V9h3.556v11.452z"/>
            </svg>
          </a>
          <a
            className="social-btn"
            href="https://www.instagram.com/cr__editzz_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            title="Instagram"
          >
            {/* Instagram icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path fill="currentColor" d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>
          </a>
        </div>
        <button className="cta-button" id="ctaButton" onClick={() => scrollToSection('work')}>
          View My Work
        </button>
      </div>
      <div className="scroll-indicator" id="scrollIndicator">
        <div style={{color: 'white', fontSize: '1.2rem'}}>↓</div>
      </div>
    </section>
  );
};

export default Hero;

