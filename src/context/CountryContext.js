const { createContext, useState, useEffect } = require('react');

// url https://countriesnow.space/api/v0.1/countries

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const URL = 'https://countriesnow.space/api/v0.1/countries';

  const [countries, setCountries] = useState(null);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setCountries(res.data))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CountryContext.Provider value={{ countries }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
