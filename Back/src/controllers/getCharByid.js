const axios = require("axios");

const KEY = "9fc2ee82c5e8.be8d85f149238870102d";
const URL = "http://localhost:3001/rickandmorty/character";

const success = (res, id, error) => {
  const { id, image, name, gender, species } = response.data;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ id, image, name, gender, species }));
};

const error = (res, error) => {
  res.writeHead(500, { "Content-Type": "text/plain" });
  res.end(error.message);
};

const getCharById = (res, id) => {
  axios
    .get(`${URL}/${id}?key=${KEY}`)
    .then((response) => success(response, res))
    .catch((error) => error(error, res));
};

module.exports = getCharById;
