const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    req(console.log("hola"));
  })
  .listen(3001, "localhost");
