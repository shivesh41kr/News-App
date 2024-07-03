import React from 'react';
import './LatestNews.css';

const LatestNews = () => {
  return (
    <section className="latest-news">
      <div className="container">
        <h2>Latest News</h2>
        {/* Example news items */}
        <div className="news-item">
          <h3>News Title</h3>
          <p>Short description or summary of the news...</p>
          <a href="#read-more">Read More</a>
        </div>
        {/* Add more news items as needed */}
      </div>
    </section>
  );
};

export default LatestNews;
