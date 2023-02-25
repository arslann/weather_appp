import React, { useContext } from 'react';
import './weatherContainer.css';
import { WeatherCard } from '../../components';
import WeatherContext from '../../context/WeatherContext';

function WeatherContainer() {
  const { cityData } = useContext(WeatherContext);

  const date = new Date();
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let dateArr = [date.getDate(), weekday[date.getDay()]];

  return (
    <div className="wa__weatherContainer">
      {cityData &&
        cityData.map((city) => {
          return (
            <WeatherCard
              key={city.id}
              date={dateArr}
              cityName={city.name}
              weather={city.weather[0].description}
              feelslike={city.main.feels_like}
              current={city.main.temp}
              humidity={city.main.humidity}
            />
          );
        })}
    </div>
  );
}

export default WeatherContainer;
