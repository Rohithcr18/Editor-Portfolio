import React, { useEffect } from 'react';
import './Portfolio.css';
import './sections/Global.css';
import './sections/Hero.css';
import './sections/About.css';
import './sections/Skills.css';
import './sections/Work.css';
import './sections/Contact.css';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Contact from './sections/Contact';

const Portfolio = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initializeEffects = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');

        setTimeout(() => {
          if (window.gsap) {
            const gsap = window.gsap;
            gsap.to('#heroTitle', { opacity: 1, y: 0, duration: 1, delay: 0.5 });
            gsap.to('#heroSubtitle', { opacity: 1, y: 0, duration: 1, delay: 0.8 });
            gsap.to('#heroDescription', { opacity: 1, y: 0, duration: 1, delay: 1.1 });
            gsap.to('#ctaButton', { opacity: 1, y: 0, duration: 1, delay: 1.4 });
            gsap.to('#scrollIndicator', { opacity: 1, duration: 1, delay: 2 });
            gsap.to('#navbar', { opacity: 1, y: 0, duration: 1, delay: 1.8 });
          }
        }, 100);
      } catch (error) {
        console.error('Failed to load external scripts:', error);
      }
    };

    initializeEffects();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animated-bg">
      <Navbar onNavClick={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default Portfolio;
