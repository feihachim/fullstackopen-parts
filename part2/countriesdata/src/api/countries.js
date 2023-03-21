import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/all";

const getByWord = async (word) => {
  const request = axios.get(baseUrl);
  return request.then((response) =>
    response.data.filter((element) =>
      element.name.common.toLowerCase().includes(word.toLowerCase())
    )
  );
};

export default { getByWord };
