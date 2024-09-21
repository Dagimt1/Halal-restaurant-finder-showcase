import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './VisualizerShowcase.css';

const VisualizerShowcase = () => {
  return (
    <div className="container">
      {/* Left Section - Text */}
      <div className="left-section">
        <h1 className="font-serif title">Hey, I'm Dagim 👋</h1>
        <p className="font-serif description">
          Welcome to the showcase of my Amazon Web Scraper project. This project is designed to help users track prices on Amazon. It scrapes product pages and compares prices over time, sending notifications when a price drops to a desired threshold.
        </p>
        <p className="font-serif description">
          <strong>Amazon Scraper:</strong> The scraper extracts product details, tracks price changes, and alerts users to deals, making it easy to monitor Amazon prices without manually checking.
        </p>
        <p className="font-serif description">
          You can <a href="https://amazon-scraper-webapp-dagim.vercel.app/" className="highlighted-link">see the deployed website here</a> to explore the functionality and test it out for yourself.
        </p>
      </div>

      {/* Right Section - Amazon Scraper Card */}
      <div className="right-section">
        <div className="project-card">
          <h2 className="font-serif">Projects · Amazon Scraper</h2>
          <Link to="/amazon-scraper">  {/* Link to the Amazon scraper page */}
            <div className="card-content">
              <video
                className="video-bg"
                src="https://cdn.dribbble.com/users/56759/screenshots/14591746/media/ecb363e61b390885c65d2015f1ead233.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisualizerShowcase;
