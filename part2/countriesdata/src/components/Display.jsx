import DisplayInfos from "./DisplayInfos";
import DisplayInfo from "./DisplayInfo";

const Display = ({ countries, setWord, weatherApi }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length > 1) {
    return <DisplayInfos countries={countries} setWord={setWord} />;
  }

  if (countries.length === 1) {
    return <DisplayInfo country={countries[0]} weatherApi={weatherApi} />;
  }

  return <div>No matches, specify another filter</div>;
};

export default Display;
