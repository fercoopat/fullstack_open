import { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = import.meta.env.VITE_SOME_KEY;

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!capital || !apiKey) {
      return;
    }

    axios
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: { q: capital, appid: apiKey, units: 'metric' },
      })
      .then((response) => {
        setWeather(response.data);
      })
      .catch(() => {
        setError(true);
      });
  }, [capital]);

  if (error) {
    return <p>Weather data is not available</p>;
  }

  if (!weather) {
    return null;
  }

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>temperature {weather.main.temp} Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
