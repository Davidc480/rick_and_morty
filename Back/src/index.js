const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end("Hola");

    const { url } = req;
    if (url.includes("rickandmorty/character")) console.log("Estoy en la ruta");
  })
  .listen(3001, "localhost");
