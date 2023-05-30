require("dotenv").config();
const server = require("./src/server");
const { conn } = require("./src/DB_connection");

const PORT = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("server raised in port: " + PORT);
  });
});
