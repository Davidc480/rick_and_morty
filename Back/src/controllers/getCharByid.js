const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = () => {
  axios.get(`${URL}:id`, (req, res) => {
    const { id } = req.params;
  });
};

module.exports = getCharById;
