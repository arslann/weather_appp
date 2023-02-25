import React, { useEffect, useState } from 'react';
import './banner.css';

function Banner({ sidebar }) {
  const toggle = sidebar[0];
  const setSidebar = sidebar[1];

  return (
    <div className="wa__banner">
      <div className="wa__banner-background-filter">
        <div className="wa__banner-background">
          <div className="wa__banner-text">
            <h2>City</h2>
            <p>Weather for the next 7 days</p>
          </div>
          <div className="wa__banner-button">
            <button onClick={() => setSidebar(!toggle)}>Şehir Ekle</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
