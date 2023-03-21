import { useQuery } from "react-query";
import weatherapi from "../api/weatherapi";

const WeatherInfo = ({ capital }) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["weather", capital],
    queryFn: () => {
      weatherapi.getWeatherByCapital(capital);
    },
  });

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error: {error.message}</h2>}
      {data && (
        <div>
          <h3>{data}</h3>
          <h2>Weather in {capital} </h2>
          <p>temperature {data.temp_c} Celsius</p>
          <img src={data.condition.icon} />
          <p>wind {data.wind_kph} km/h</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
