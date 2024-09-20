import React from 'react';
import scraperDemoVideo from './assets/scraperDemo.mp4';  // Import the demo video for the Amazon scraper
import './AmazonScraperPage.css';  // Custom styles for the Amazon scraper page

const AmazonScraperPage = () => {
  return (
    <div className="scraper-page">
      <h1 className="font-serif title">Amazon Price Tracker & Scraper</h1>
      <p className="font-serif description">
        The Amazon Price Tracker web app is designed to help users track the prices of products on Amazon. It automatically scrapes product details, maintains a price history, and sends email notifications when the price of a product drops below a set threshold.
      </p>

      <h2 className="font-serif subtitle">Key Features</h2>
      <ul className="font-serif description">
        <li><strong>Scrape Amazon Products:</strong> The app scrapes product details like price, title, and description directly from Amazon, updating the database with the latest price.</li>
        <li><strong>Track Price History:</strong> It keeps a detailed history of price changes, allowing users to see trends over time for each product.</li>
        <li><strong>Email Notifications:</strong> Users can subscribe to specific products and receive email alerts when the price drops below their preferred threshold.</li>
        <li><strong>Serverless Automation:</strong> A serverless function runs at scheduled intervals to automatically scrape and update product prices in the background.</li>
      </ul>

      <h2 className="font-serif subtitle">Workflow Overview</h2>
      <ul className="font-serif description">
        <li><strong>Product Scraping:</strong> The scraper fetches product details like the current price and updates the product’s price history in the MongoDB database.</li>
        <li><strong>Price Updates & Notifications:</strong> If a product's price drops below the user-defined threshold, an email notification is automatically sent to the user.</li>
        <li><strong>Serverless Function:</strong> The scheduled serverless function fetches product data at regular intervals and updates the database in the background.</li>
      </ul>

      <h2 className="font-serif subtitle">Sample Code Snippets</h2>
      
      {/* Code Snippet Cards */}
      <div className="code-snippet-cards">
        <div className="code-card">
          <h3 className="font-serif">Product Scraping</h3>
          <pre>
            {`
import { scrapeAmazonProduct } from "@/lib/scraper";

// Scrape product details from Amazon
const scrapedProduct = await scrapeAmazonProduct(product.url);
if (!scrapedProduct) throw new Error("Failed to scrape product");
            `}
          </pre>
        </div>

        <div className="code-card">
          <h3 className="font-serif">Updating Price History</h3>
          <pre>
            {`
const updatedPriceHistory = [
  ...currentProduct.priceHistory,
  { price: scrapedProduct.currentPrice }
];

// Update product in MongoDB
await Product.findOneAndUpdate({ url: product.url }, { priceHistory: updatedPriceHistory });
            `}
          </pre>
        </div>

        <div className="code-card">
          <h3 className="font-serif">Sending Email Notifications</h3>
          <pre>
            {`
const emailContent = await generateEmailBody(productInfo, emailNotifType);
const userEmails = updatedProduct.users.map(user => user.email);

// Send notification emails
await sendEmail(emailContent, userEmails);
            `}
          </pre>
        </div>

        <div className="code-card">
          <h3 className="font-serif">Serverless Scraper Function</h3>
          <pre>
            {`
export async function GET(request) {
  const products = await Product.find({});
  await Promise.all(products.map(async (product) => {
    const scrapedProduct = await scrapeAmazonProduct(product.url);
    // Update product price and notify users
  }));
  return NextResponse.json({ message: "Products updated" });
}
            `}
          </pre>
        </div>
      </div>

      {/* Final Demo Video */}
      <div className="video-container">
        <h2 className="font-serif subtitle">Amazon Scraper Demo</h2>
        <video className="demo-video" src={scraperDemoVideo} controls />
      </div>
    </div>
  );
};

export default AmazonScraperPage;
