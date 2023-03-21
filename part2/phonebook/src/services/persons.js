import axios from "axios";

const baseUrl = "http://localhost:3000/api/persons";

const getAll = async () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getListByWord = async (word) => {
  const request = axios.get(baseUrl);
  return request.then((response) =>
    response.data.filter((element) =>
      element.name.toLowerCase().includes(word.toLowerCase())
    )
  );
};

const createOne = async (person) => {
  const request = axios.post(baseUrl, person);
  return request.then((response) => response.data);
};

const updateOne = async (person) => {
  const request = axios.put(`${baseUrl}/${person.id}`, person);
  return request.then((response) => response.data);
};

const deleteOne = async (person) => {
  const request = axios.delete(`${baseUrl}/${person.id}`);
  return request.then((response) => response.data);
};

export default {
  getAll,
  getListByWord,
  createOne,
  updateOne,
  deleteOne,
};
