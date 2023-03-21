import axios from "axios";

const baseUrl = "https://api.weatherapi.com/v1/current.json";

const getWeatherByCapital = async (capital) => {
  const request = axios.get(baseUrl, {
    params: {
      key: import.meta.env.VITE_WEATHERAPI_KEY,
      q: capital,
    },
  });
  return request.then((response) => response.data);
};

export default { getWeatherByCapital };
