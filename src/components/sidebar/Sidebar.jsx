import React, { useContext, useEffect, useState } from 'react';

import { GrClose } from 'react-icons/gr';
import './sidebar.css';
import CountryContext from '../../context/CountryContext';
import WeatherContext from '../../context/WeatherContext';

function Sidebar({ sidebar }) {
  const toggle = sidebar[0];
  const setSidebar = sidebar[1];

  const { countries } = useContext(CountryContext);
  const { setCity } = useContext(WeatherContext);

  const [cities, setCities] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    if (selectedCountry) {
      let data = countries.filter((el) => el.country === selectedCountry);
      setCities(data[0].cities);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCity) {
      setCity(selectedCity);
    }

    setSidebar(!toggle);
  };

  return (
    <div className="wa__sidebar">
      <div className="wa__sidebar-filter"></div>
      <div className="wa__sidebar-form fade-in-right">
        <form>
          <div className="wa__sidebar-title">
            <p>Şehir ekle</p>

            <button onClick={() => setSidebar(!toggle)}>
              <GrClose></GrClose>
            </button>
          </div>
          <div className="wa__sidebar-form-country">
            <label htmlFor="country">Ülke</label>
            <select
              name="country"
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="" disabled selected>
                Ülke seçin
              </option>
              {countries &&
                countries.map((el, id) => {
                  return <option key={id}>{el.country}</option>;
                })}
            </select>
          </div>
          <div className="wa__sidebar-form-city">
            <label htmlFor="city">Şehir</label>
            <select
              name="city"
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="" disabled selected>
                Şehir seçin
              </option>
              {cities &&
                cities.map((el, id) => {
                  return <option key={id}>{el}</option>;
                })}
            </select>
          </div>

          <div className="wa__sidebar-form-buttons">
            <button onClick={() => setSidebar(!toggle)}>Cancel</button>
            <button onClick={handleSubmit}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
