import React from 'react';
import './Learning.css'; // <- Make sure you create this CSS file!

function Learning() {
  return (
    <div className="learning-container">
      <h1 className="learning-title">Learning Dashboard</h1>
      <p className="learning-subtitle">
        Your gateway to academic success with curated video lectures and past examination resources.
      </p>

      <div className="learning-buttons">
        <button className="learning-btn active">
          📚 Explore Videos
        </button>
        <button className="learning-btn">
          📄 Past Questions
        </button>
      </div>

      <div className="latest-videos-section">
        <h2 className="section-title">Latest Educational Videos</h2>
        
        <div className="videos-grid">
          <div className="video-card">Video Placeholder</div>
          <div className="video-card">Video Placeholder</div>
          <div className="video-card">Video Placeholder</div>
        </div>
      </div>
    </div>
  );
}

export default Learning;
