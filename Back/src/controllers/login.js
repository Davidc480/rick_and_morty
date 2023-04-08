const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    const user = await User.findOne({ where: { email } });
    email.lengt > 0 && password.length > 0
      ? user
        ? password == user.password
          ? res.status(200).json({ access: true })
          : res.status(403).json({ error: "Contraseña incorrecta" })
        : res.status(400).json({ error: "Usuario no encontrado" })
      : res.status(400).json({ error: "Faltan datos" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
