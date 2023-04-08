const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  email.length > 0 && password.length > 0
    ? await User.findOrCreate({
        where: { email },
        defaults: { password },
      })
        .then(([user, created]) => {
          res.status(200).json({ created: created, user });
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        })
    : res.status(400).json({ error: "Faltan datos" });
};

module.exports = postUser;
