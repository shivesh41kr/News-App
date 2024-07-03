import React from 'react';
import Header from './jsx/header/header';
import FeaturedArticles from './jsx/featured/FeaturedArticles';
import LatestNews from './jsx/latest/LatestNews';
import Footer from './jsx/footer/Footer';
import './App.css'; // Main CSS file for the entire app
import AdBanner from './jsx/AdBanner';

const App = () => {
  return (
    <div className="apps">
      <AdBanner />
      <Header />
      <div className="app">
      <main className="main-content">
        <FeaturedArticles />
        <LatestNews />
      </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
