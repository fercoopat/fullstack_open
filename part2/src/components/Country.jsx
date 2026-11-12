const Country = ({ country }) => (
  <div>
    <h1>{country.name.common}</h1>
    <p>capital {country.capital?.join(', ')}</p>
    <p>area {country.area}</p>

    <h2>languages</h2>
    <ul>
      {Object.values(country.languages ?? {}).map((language) => (
        <li key={language}>{language}</li>
      ))}
    </ul>

    <img src={country.flags.png} alt={country.flags.alt} width="150" />
  </div>
);

export default Country;
