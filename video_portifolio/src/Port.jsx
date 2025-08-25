import React, { useEffect } from 'react';
import './Portfolio.css';
// Note: Removed local asset import to avoid missing file errors

const Portfolio = () => {
  useEffect(() => {
    // Load external scripts
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
            initializeAnimations();
          }
        }, 100);
      } catch (error) {
        console.error('Failed to load external scripts:', error);
      }
    };

    const initializeAnimations = () => {
      const gsap = window.gsap;
      gsap.to('#heroTitle', { opacity: 1, y: 0, duration: 1, delay: 0.5 });
      gsap.to('#heroSubtitle', { opacity: 1, y: 0, duration: 1, delay: 0.8 });
      gsap.to('#heroDescription', { opacity: 1, y: 0, duration: 1, delay: 1.1 });
      gsap.to('#ctaButton', { opacity: 1, y: 0, duration: 1, delay: 1.4 });
      gsap.to('#scrollIndicator', { opacity: 1, duration: 1, delay: 2 });
      gsap.to('#navbar', { opacity: 1, y: 0, duration: 1, delay: 1.8 });
    };

    initializeEffects();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterClick = (filter, event) => {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    items.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  };

  return (
    <div className="animated-bg">
        <nav className="nav-bar" id="navbar">
          <div className="nav-content">
            <div className="logo">Rohith CR</div>
            <div className="nav-links">
              <a onClick={() => scrollToSection('hero')}>Home</a>
              <a onClick={() => scrollToSection('about')}>About</a>
              <a onClick={() => scrollToSection('skills')}>Skills</a>
              <a onClick={() => scrollToSection('work')}>Work</a>
              <a onClick={() => scrollToSection('contact')}>Contact</a>
            </div>
          </div>
        </nav>
        
        <section className="section hero-section" id="hero">
          <div className="hero-content">
            <h1 className="hero-title" id="heroTitle">ROHITH C R</h1>
            <p className="hero-subtitle" id="heroSubtitle">Video Editor & Poster Designer</p>
            <p className="hero-description" id="heroDescription">
              Creating compelling visual narratives that engage, inspire, and leave lasting impressions through innovative editing techniques and creative storytelling.
            </p>
            <button className="cta-button" id="ctaButton" onClick={() => scrollToSection('work')}>
              View My Work
            </button>
          </div>
          <div className="scroll-indicator" id="scrollIndicator">
            <div style={{color: 'white', fontSize: '1.2rem'}}>↓</div>
          </div>
        </section>
        
        <section className="section about-section" id="about">
          <div className="about-container">
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <p className="about-description">
                I'm a passionate video editor with over 3 years of experience in creating compelling visual stories. From music videos to corporate content, I bring creativity and technical expertise to every project.
              </p>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-name">Video Editing</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Motion Graphics</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Color Grading</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Sound Design</div>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="profile-visual">
                <img
                  src="https://ui-avatars.com/api/?name=Rohith+CR&background=0D8ABC&color=fff&size=256"
                  alt="Rohith CR Profile"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="section skills-section" id="skills">
          <div className="skills-container">
            <h2 className="section-title">My Skills</h2>
            <p className="about-description" style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px'}}>
              Mastering the art of visual storytelling through cutting-edge tools and techniques
            </p>
            
            <div className="skills-showcase">
              <div className="skill-card">
                <div className="skill-icon">🎬</div>
                <h3 className="skill-title">Video Editing</h3>
                <div className="skill-percentage">95%</div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{width: '95%'}}></div>
                </div>
                <div className="skill-tools">
                  <span className="tool-tag">Premiere Pro</span>
                  <span className="tool-tag">Final Cut Pro</span>
                  <span className="tool-tag">DaVinci Resolve</span>
                </div>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon">🎨</div>
                <h3 className="skill-title">Motion Graphics</h3>
                <div className="skill-percentage">88%</div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{width: '88%'}}></div>
                </div>
                <div className="skill-tools">
                  <span className="tool-tag">After Effects</span>
                  <span className="tool-tag">Cinema 4D</span>
                  <span className="tool-tag">Blender</span>
                </div>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon">🌈</div>
                <h3 className="skill-title">Color Grading</h3>
                <div className="skill-percentage">92%</div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{width: '92%'}}></div>
                </div>
                <div className="skill-tools">
                  <span className="tool-tag">DaVinci Resolve</span>
                  <span className="tool-tag">Lumetri</span>
                  <span className="tool-tag">Magic Bullet</span>
                </div>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon">🔊</div>
                <h3 className="skill-title">Sound Design</h3>
                <div className="skill-percentage">85%</div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{width: '85%'}}></div>
                </div>
                <div className="skill-tools">
                  <span className="tool-tag">Audition</span>
                  <span className="tool-tag">Pro Tools</span>
                  <span className="tool-tag">Logic Pro</span>
                </div>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon">📐</div>
                <h3 className="skill-title">Poster Design</h3>
                <div className="skill-percentage">90%</div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{width: '90%'}}></div>
                </div>
                <div className="skill-tools">
                  <span className="tool-tag">Photoshop</span>
                  <span className="tool-tag">Illustrator</span>
                  <span className="tool-tag">Figma</span>
                </div>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon">⚡</div>
                <h3 className="skill-title">Visual Effects</h3>
                <div className="skill-percentage">82%</div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{width: '82%'}}></div>
                </div>
                <div className="skill-tools">
                  <span className="tool-tag">After Effects</span>
                  <span className="tool-tag">Nuke</span>
                  <span className="tool-tag">Fusion</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section work-section" id="work">
          <div className="work-container">
            <h2 className="section-title">Featured Work</h2>
            <p className="about-description" style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px'}}>
              A showcase of my best projects across different categories and styles
            </p>
            
            <div className="work-grid">
              <div className="work-item" data-category="music-videos">
                <div className="work-video">
                  🎵
                  <div className="work-overlay">
                    <button className="play-button">▶</button>
                  </div>
                </div>
                <div className="work-content">
                  <div className="work-category">Music Video</div>
                  <h3 className="work-title">Electric Dreams</h3>
                  <p className="work-description">
                    High-energy music video featuring dynamic transitions, synchronized beats, and vibrant color grading that perfectly complements the electronic genre.
                  </p>
                  <div className="work-stats">
                    <div className="stat-item">
                      <div className="stat-number">2.5M</div>
                      <div className="stat-label">Views</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">4:32</div>
                      <div className="stat-label">Duration</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">2023</div>
                      <div className="stat-label">Year</div>
                    </div>
                  </div>
                  <div className="work-tags">
                    <span className="tag">Music Video</span>
                    <span className="tag">VFX</span>
                    <span className="tag">Color Grading</span>
                    <span className="tag">Motion Graphics</span>
                  </div>
                </div>
              </div>
              
              <div className="work-item" data-category="commercials">
                <div className="work-video">
                  📺
                  <div className="work-overlay">
                    <button className="play-button">▶</button>
                  </div>
                </div>
                <div className="work-content">
                  <div className="work-category">Commercial</div>
                  <h3 className="work-title">Brand Revolution</h3>
                  <p className="work-description">
                    Corporate commercial showcasing innovative product features through sleek animations, professional cinematography, and compelling narrative structure.
                  </p>
                  <div className="work-stats">
                    <div className="stat-item">
                      <div className="stat-number">850K</div>
                      <div className="stat-label">Views</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">1:45</div>
                      <div className="stat-label">Duration</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">2023</div>
                      <div className="stat-label">Year</div>
                    </div>
                  </div>
                  <div className="work-tags">
                    <span className="tag">Commercial</span>
                    <span className="tag">Product Demo</span>
                    <span className="tag">Motion Graphics</span>
                    <span className="tag">3D Animation</span>
                  </div>
                </div>
              </div>
              
              <div className="work-item" data-category="short-films">
                <div className="work-video">
                  🎭
                  <div className="work-overlay">
                    <button className="play-button">▶</button>
                  </div>
                </div>
                <div className="work-content">
                  <div className="work-category">Short Film</div>
                  <h3 className="work-title">Silent Echoes</h3>
                  <p className="work-description">
                    Award-winning short film featuring emotional storytelling, cinematic color palette, and masterful sound design that creates an immersive experience.
                  </p>
                  <div className="work-stats">
                    <div className="stat-item">
                      <div className="stat-number">125K</div>
                      <div className="stat-label">Views</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">12:18</div>
                      <div className="stat-label">Duration</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">2022</div>
                      <div className="stat-label">Year</div>
                    </div>
                  </div>
                  <div className="work-tags">
                    <span className="tag">Short Film</span>
                    <span className="tag">Narrative</span>
                    <span className="tag">Award Winner</span>
                    <span className="tag">Festival Selection</span>
                  </div>
                </div>
              </div>
              
              <div className="work-item" data-category="motion-graphics">
                <div className="work-video">
                  ✨
                  <div className="work-overlay">
                    <button className="play-button">▶</button>
                  </div>
                </div>
                <div className="work-content">
                  <div className="work-category">Motion Graphics</div>
                  <h3 className="work-title">Tech Startup Explainer</h3>
                  <p className="work-description">
                    Animated explainer video for a tech startup, featuring clean typography, smooth transitions, and engaging visual metaphors to simplify complex concepts.
                  </p>
                  <div className="work-stats">
                    <div className="stat-item">
                      <div className="stat-number">420K</div>
                      <div className="stat-label">Views</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">2:15</div>
                      <div className="stat-label">Duration</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">2023</div>
                      <div className="stat-label">Year</div>
                    </div>
                  </div>
                  <div className="work-tags">
                    <span className="tag">Motion Graphics</span>
                    <span className="tag">Explainer</span>
                    <span className="tag">Typography</span>
                    <span className="tag">2D Animation</span>
                  </div>
                </div>
              </div>
              
              <div className="work-item" data-category="documentaries">
                <div className="work-video">
                  📹
                  <div className="work-overlay">
                    <button className="play-button">▶</button>
                  </div>
                </div>
                <div className="work-content">
                  <div className="work-category">Documentary</div>
                  <h3 className="work-title">Ocean Conservation</h3>
                  <p className="work-description">
                    Environmental documentary highlighting ocean conservation efforts, featuring underwater cinematography and compelling interview segments.
                  </p>
                  <div className="work-stats">
                    <div className="stat-item">
                      <div className="stat-number">680K</div>
                      <div className="stat-label">Views</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">28:45</div>
                      <div className="stat-label">Duration</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">2022</div>
                      <div className="stat-label">Year</div>
                    </div>
                  </div>
                  <div className="work-tags">
                    <span className="tag">Documentary</span>
                    <span className="tag">Environmental</span>
                    <span className="tag">Cinematography</span>
                    <span className="tag">Storytelling</span>
                  </div>
                </div>
              </div>
              
              <div className="work-item" data-category="social-media">
                <div className="work-video">
                  📱
                  <div className="work-overlay">
                    <button className="play-button">▶</button>
                  </div>
                </div>
                <div className="work-content">
                  <div className="work-category">Social Media</div>
                  <h3 className="work-title">Viral Campaign Series</h3>
                  <p className="work-description">
                    Series of short-form content for social media platforms, optimized for engagement with quick cuts, trending music, and platform-specific formatting.
                  </p>
                  <div className="work-stats">
                    <div className="stat-item">
                      <div className="stat-number">5.2M</div>
                      <div className="stat-label">Views</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">0:30</div>
                      <div className="stat-label">Duration</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">2023</div>
                      <div className="stat-label">Year</div>
                    </div>
                  </div>
                  <div className="work-tags">
                    <span className="tag">Social Media</span>
                    <span className="tag">Viral Content</span>
                    <span className="tag">Short Form</span>
                    <span className="tag">Trending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section contact-section" id="contact">
          <div className="contact-container">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="about-description" style={{textAlign: 'center', margin: '0 auto 50px'}}>
              Ready to bring your vision to life? Let's discuss your next project.
            </p>
            
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-label">Email</div>
                <div className="contact-value">rohithcr@example.com</div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">+91 98765 43210</div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">linkedin.com/in/rohithcr</div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🎬</div>
                <div className="contact-label">Reel</div>
                <div className="contact-value">vimeo.com/rohithcr</div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section portfolio-section" id="portfolio">
          <div className="portfolio-container">
            <h2 className="section-title">My Portfolio</h2>
            <div className="filter-buttons">
              <button className="filter-btn active" onClick={(e) => handleFilterClick('all', e)}>All Projects</button>
              <button className="filter-btn" onClick={(e) => handleFilterClick('music-videos', e)}>Music Videos</button>
              <button className="filter-btn" onClick={(e) => handleFilterClick('commercials', e)}>Commercials</button>
              <button className="filter-btn" onClick={(e) => handleFilterClick('short-films', e)}>Short Films</button>
            </div>
            
            <div className="portfolio-grid">
              <div className="portfolio-item" data-category="music-videos">
                <div className="portfolio-image">🎵</div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">Electric Dreams</h3>
                  <p className="portfolio-description">
                    High-energy music video featuring dynamic transitions, color grading, and synchronized visual effects.
                  </p>
                  <div className="portfolio-tags">
                    <span className="tag">Music Video</span>
                    <span className="tag">VFX</span>
                    <span className="tag">Color Grading</span>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-item" data-category="commercials">
                <div className="portfolio-image">📺</div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">Brand Revolution</h3>
                  <p className="portfolio-description">
                    Corporate commercial showcasing product features through sleek animations and professional cinematography.
                  </p>
                  <div className="portfolio-tags">
                    <span className="tag">Commercial</span>
                    <span className="tag">Product Demo</span>
                    <span className="tag">Motion Graphics</span>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-item" data-category="short-films">
                <div className="portfolio-image">🎭</div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">Silent Echoes</h3>
                  <p className="portfolio-description">
                    Award-winning short film featuring emotional storytelling and cinematic color palette.
                  </p>
                  <div className="portfolio-tags">
                    <span className="tag">Short Film</span>
                    <span className="tag">Narrative</span>
                    <span className="tag">Award Winner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Portfolio;
