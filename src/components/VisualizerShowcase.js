import React from 'react';
import { Link } from 'react-router-dom';
import './VisualizerShowcase.css';

const VisualizerShowcase = () => {
  return (
    <div className="container">
      {/* Left Section - Text */}
      <div className="left-section">
        <h1 className="font-serif title">Hey, I'm Dagim 👋</h1>
        <p className="font-serif description">
          Welcome to the showcase of my Halal Savor Web App project. This full-stack application empowers users to discover halal restaurants, manage their preferences, and receive notifications about new halal options in their area.
        </p>
        <p className="font-serif description">
          <strong>Halal Savor:</strong> This app features a data scraper that fetches restaurant details and enables automated notifications, ensuring users never miss an opportunity to explore new halal spots.
        </p>
        <p className="font-serif description">
          You can <a href="https://halal-web-app-deployable-6qy5-b33qp9z01-dagimt1s-projects.vercel.app/" className="highlighted-link">see the deployed website here</a> to explore the functionality and experience it firsthand.
        </p>
      </div>

      {/* Right Section - Project Card */}
      <div className="right-section">
        <Link to="/amazon-scraper" className="project-link"> {/* Wrap entire card in Link */}
          <div className="project-card">
            <h2 className="font-serif">Projects · Halal Savor</h2>
            <div className="card-content">
              <img
                className="image-bg"
                src="https://cdn.dribbble.com/users/1703271/screenshots/10834974/media/bc73cd2e899a671b44257ab35991cfd4.jpg?resize=1600x1200&vertical=center"
                alt="Halal Savor Web App"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VisualizerShowcase;
