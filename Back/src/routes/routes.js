const { Router } = require("express");
const getCharById = require("../controllers/getCharByid");
const login = require("../controllers/login");
const postUsers = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.status(200).send("Server funcionando");
});

mainRouter.get("/rickandmorty/login", login);

mainRouter.post("/rickandmorty/login", postUsers);

mainRouter.get("/rickandmorty/character/:id", getCharById);

mainRouter.post("/rickandmorty/fav", postFav);

mainRouter.delete("/rickandmorty/fav/:id", deleteFav);

module.exports = mainRouter;
