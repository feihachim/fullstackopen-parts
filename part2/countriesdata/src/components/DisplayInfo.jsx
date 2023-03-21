import WeatherInfo from "./WeatherInfo";

const DisplayInfo = ({ country, weatherApi }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h2>languages</h2>
      <ul>
        {Object.entries(country.languages).map((item, index) => (
          <li key={`${item}-${index}`}>{item[1]}</li>
        ))}
      </ul>
      <img src={country.flags.png} />
      <WeatherInfo capital={country.capital[0]} />
    </div>
  );
};

export default DisplayInfo;
