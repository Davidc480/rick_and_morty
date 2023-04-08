const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.status(400).json({ error: "Faltan datos" });
  } else if (email.length > 0 && password.length > 0) {
    try {
      await User.findOrCreate({
        where: { email },
        defaults: { password },
      })
        .then(([user, created]) => {
          res.status(200).json({ created: created, user });
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = postUser;
