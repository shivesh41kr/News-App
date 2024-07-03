import React from 'react';

const AdBanner = () => {
  const adContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ad Content</title>
      <style>
        body {
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          background-color: #f0f0f0;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        }
        h1 {
          font-size: 2rem;
          color: #333;
        }
      </style>
    </head>
    <body>
      <h1>ads</h1>
    </body>
    </html>
  `;

  const encodedAdContent = `data:text/html;charset=utf-8,${encodeURIComponent(adContent)}`;

  return (
    <div data-testid="ad" id=":R296:">
      <div id="google_ads" style={{ border: '0pt' }}>
        <iframe
          title="3rd party ad content"
          width="100%"
          height="90"
          style={{ border: '0px', verticalAlign: 'bottom' }}
          aria-label="Advertisement"
          src={encodedAdContent}
        >
        </iframe>
      </div>
    </div>
  );
};

export default AdBanner;
