import { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './components/Country';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const matches = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase()),
  );

  let content;

  if (matches.length > 10) {
    content = <p>Too many matches, specify another filter</p>;
  } else if (matches.length > 1) {
    content = (
      <ul>
        {matches.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    );
  } else if (matches.length === 1) {
    content = <Country country={matches[0]} />;
  }

  return (
    <div>
      find countries <input value={query} onChange={handleQueryChange} />
      {content}
    </div>
  );
};

export default App;
