const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/routes");
const cors = require("cors");

const server = express();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// server.use((req, res, next) => {
//   req.url = "/rickandmorty" + req.url;

//   next();
// });

server.use(cors());

server.use(morgan("dev"));

server.use(express.json());

server.use(mainRouter);

module.exports = server;
