const { Router } = require("express");
const getCharById = require("../controllers/getCharByid");

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.status(200).send("Server funcionando");
});

mainRouter.get("/api/:id", getCharById);

module.exports = mainRouter;
