const { createContext, useState, useEffect } = require('react');

// url https://countriesnow.space/api/v0.1/countries

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const APIKEY = '98fa87c3be54623edbb69eca13643253';

  const [city, setCity] = useState(null);
  const [cityData, setcityData] = useState([]);

  const fetchData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.cod === 200) setcityData([...cityData, res]);
      })
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    if (city) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  console.log(cityData);
  return (
    <WeatherContext.Provider value={{ setCity, cityData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
