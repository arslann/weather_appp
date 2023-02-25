import './App.css';
import { Header, WeatherContainer } from './containers/';
import { Sidebar } from './components';
import { useState } from 'react';
import { CountryProvider } from './context/CountryContext';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <WeatherProvider>
        <CountryProvider>
          {sidebar && <Sidebar sidebar={[sidebar, setSidebar]} />}
          <Header sidebar={[sidebar, setSidebar]} />
          <WeatherContainer />
        </CountryProvider>
      </WeatherProvider>
    </>
  );
}

export default App;
