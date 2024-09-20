import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisualizerShowcase from './components/VisualizerShowcase';
import AmazonScraperPage from './components/AmazonScraperPage';  // Import Amazon Scraper page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VisualizerShowcase />} />
        <Route path="/amazon-scraper" element={<AmazonScraperPage />} />  {/* New route for Amazon Scraper */}
      </Routes>
    </Router>
  );
}

export default App;
