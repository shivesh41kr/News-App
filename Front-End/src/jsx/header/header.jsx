import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <a href="/">
            <img src="https://thepublive.com/assets/images/main_logo.svg" alt="Harvard Business Review" />
          </a>
        </div>
        <div className="header__actions">
          <button className="header__button">Subscribe</button>
          <a href="/login" className="header__link">
            Sign In
          </a>
          <button className="header__search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
