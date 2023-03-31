const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  if (email && password) {
    const usuario = users.find((us) => us.email == email);
    const contraseña = users.find((us) => us.password == password);
    if (usuario && contraseña) {
      res.status(200).json({ access: true });
    } else {
      res.status(300).json({ access: false });
    }
  } else {
    res.status(300).json({ error: "Debe tener usuario y password" });
  }
};

module.exports = login;
