import React from 'react';
import { TiWeatherCloudy } from 'react-icons/ti';
import './weatherCard.css';

function WeatherCard({
  date,
  cityName,
  weather,
  feelslike,
  current,
  humidity,
}) {
  return (
    <div className="wa__weatherCard">
      <div className="wa__weatherCard-date">
        <p>{date[1]}</p>
        <p>{date[0]}</p>
      </div>
      <div className="wa__weatherCard-icon">
        <TiWeatherCloudy className="icon" />
        <p>{cityName}</p>
        <p>{weather}</p>
      </div>
      <div className="wa__weatherCard-temp">
        <div className="wa__weatherCard-temp-title">
          <p>
            Current Temp. <span>{current}</span>
          </p>
          <p>
            Feels Like <span>{feelslike}</span>
          </p>
          <p>
            Humidity <span>{humidity}%</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
