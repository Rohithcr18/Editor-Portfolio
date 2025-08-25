import React, { useEffect, useState } from 'react';
import './Work.css';
// Note: Local asset imports were removed because files are not present under src/assets/.
// The page will still show Drive buttons. Once assets are added, we can rewire imports.

// Using only external Drive links now; local folders mapping removed.

const Work = () => {

  const [lightboxSrc, setLightboxSrc] = useState('');

  // External Google Drive links per category
  const driveLinks = {
    poster: 'https://drive.google.com/drive/folders/1tbmDVkEd8j4tXem_jPSBI2R3PT7OyuTn?usp=drive_link',
    logo: 'https://drive.google.com/drive/folders/1Sr1fA6ssn2GfX0xWbUsJKoNbf-xQGVc2?usp=drive_link',
    davinci: 'https://drive.google.com/drive/folders/1Pber3pHeKxOJk8F-q8M78v9s4qn3Jfxs?usp=drive_link',
    certificates: 'https://drive.google.com/drive/folders/1FbO_JhjubAQZStkBkvGzXk35XowLjdmn?usp=drive_link',
    capcut: 'https://drive.google.com/drive/folders/1NQEg7vGVwFGhL49ZV_7-R2anzJ_XFV9R?usp=drive_link',
    'after effects': 'https://drive.google.com/drive/folders/19dnnao4OsCvx-phcfiL2uLXvuEh5vNUG?usp=drive_link',
  };

  // Close lightbox with Esc key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxSrc('');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="section work-section" id="work">
      <div className="work-container">
        <h2 className="section-title">Works done</h2>
        {/* External drive links per category */}
        <div className="work-drive-link" style={{ margin: '12px 0 20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {Object.entries(driveLinks).map(([key, link]) => (
            <a
              key={key}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                display: 'inline-block',
                padding: '8px 14px',
                background: '#0ea5e9',
                color: '#fff',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                boxShadow: '0 4px 14px rgba(14,165,233,0.3)'
              }}
            >
              {key.replace(/\b\w/g, c => c.toUpperCase())} on Drive ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

