import { Filter, DisplayInfo, DisplayInfos, Display } from "./components";
import { useState } from "react";
import { useQuery } from "react-query";
import countriesApi from "./api/countries";
import weatherApi from "./api/weatherapi";

function App() {
  const [word, setWord] = useState("");

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["countries", word],
    queryFn: () => countriesApi.getByWord(word),
  });

  const handleWord = (e) => {
    setWord(e.target.value);
  };

  return (
    <div>
      <Filter handleWord={handleWord} />
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error: {error.message}</h1>}
      {data && (
        <Display countries={data} setWord={setWord} weatherApi={weatherApi} />
      )}
    </div>
  );
}

export default App;
