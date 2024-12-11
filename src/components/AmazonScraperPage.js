import React from 'react';
import scraperDemoVideo from './assets/halal-showcase.mp4'; // Using the imported demo video
import './AmazonScraperPage.css';

const AmazonScraperPage = () => {
  return (
    <div className="scraper-page">
      <h1 className="font-serif title">Halal Savor Web App</h1>
      <p className="font-serif description">
        The Halal Savor web app is a full-stack application designed to assist users in finding halal restaurants and food options. It includes a robust scraper script that collects restaurant data, tracks user preferences, and sends notifications about new halal spots.
      </p>

      <h2 className="font-serif subtitle">Key Features</h2>
      <ul className="font-serif description">
        <li><strong>Discover Halal Restaurants:</strong> The app scrapes restaurant data from review platforms, offering halal options tailored to users' preferences.</li>
        <li><strong>Preference Tracking:</strong> Users can save favorite restaurants and get notified when new options are available nearby.</li>
        <li><strong>Email Alerts:</strong> The app sends email notifications about newly added halal spots matching user preferences.</li>
        <li><strong>Automated Updates:</strong> A serverless function periodically scrapes and updates the database with fresh restaurant details.</li>
      </ul>

      <h2 className="font-serif subtitle">Workflow Overview</h2>
      <ul className="font-serif description">
        <li><strong>Data Collection:</strong> The scraper gathers restaurant details, including name, location, and halal status, updating the database.</li>
        <li><strong>Notifications:</strong> If new halal options match user preferences, notifications are sent automatically via email.</li>
        <li><strong>Automated Scraping:</strong> The serverless function ensures data is refreshed regularly without manual intervention.</li>
      </ul>

      <h2 className="font-serif subtitle">Sample Code Snippets</h2>
      
      {/* Code Snippet Cards */}
      <div className="code-snippet-cards">
        <div className="code-card">
          <h3 className="font-serif">Scraping Restaurant Data</h3>
          <pre>
            {`
import { scrapeHalalRestaurant } from "@/lib/scraper";

// Scrape restaurant details
const scrapedData = await scrapeHalalRestaurant(restaurant.url);
if (!scrapedData) throw new Error("Failed to scrape data");
            `}
          </pre>
        </div>

        <div className="code-card">
          <h3 className="font-serif">Updating User Preferences</h3>
          <pre>
            {`
const updatedPreferences = [
  ...user.preferences,
  { restaurant: scrapedData.name }
];

// Update preferences in the database
await User.findOneAndUpdate({ email: user.email }, { preferences: updatedPreferences });
            `}
          </pre>
        </div>

        <div className="code-card">
          <h3 className="font-serif">Sending Notifications</h3>
          <pre>
            {`
const emailContent = generateEmailBody(restaurantInfo, notificationType);
const recipientEmails = users.map(user => user.email);

// Send email notifications
await sendEmail(emailContent, recipientEmails);
            `}
          </pre>
        </div>

        <div className="code-card">
          <h3 className="font-serif">Automated Scraper Function</h3>
          <pre>
            {`
export async function GET(request) {
  const restaurants = await Restaurant.find({});
  await Promise.all(restaurants.map(async (restaurant) => {
    const scrapedRestaurant = await scrapeHalalRestaurant(restaurant.url);
    // Update restaurant data and notify users
  }));
  return NextResponse.json({ message: "Data updated successfully" });
}
            `}
          </pre>
        </div>
      </div>

      {/* Demo Video */}
      <div className="video-container">
        <h2 className="font-serif subtitle">Halal Savor Demo</h2>
        <video
          className="demo-video"
          src={scraperDemoVideo}
          controls
          autoplay
          loop
        />
      </div>
    </div>
  );
};

export default AmazonScraperPage;
