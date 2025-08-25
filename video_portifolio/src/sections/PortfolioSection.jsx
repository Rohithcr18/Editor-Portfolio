import React, { useCallback } from 'react';

const PortfolioSection = () => {
  const handleFilterClick = useCallback((filter, event) => {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach((btn) => btn.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach((item) => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }, []);

  return (
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
  );
};

export default PortfolioSection;
