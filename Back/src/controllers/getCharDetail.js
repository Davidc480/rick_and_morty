const axios = require("axios");

const KEY = "9fc2ee82c5e8.be8d85f149238870102d";
const URL = "http://localhost:3001/rickandmorty/character";

const success = (response, res) => {
  const { image, name, gender, status, origin, species } = response.data;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ image, name, gender, status, origin, species }));
};

const error = (res, error) => {
  res.writeHead(500, { "Content-Type": "text/plain" });
  res.end(error.message);
};

const getCharDetail = (res, id) => {
  axios
    .get(`${URL}/${id}?key=${KEY}`)
    .then((response) => success(response, res))
    .catch((err) => error(res, err));
};

module.exports = getCharDetail;
