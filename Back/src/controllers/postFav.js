const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  if ((name, origin, status, image, species, gender)) {
    try {
      const [favorite, created] = await Favorite.findOrCreate({
        where: { name },
        defaults: { origin, status, image, species, gender },
      });
      const characters = await Favorite.findAll();
      res.status(200).json({ created: created, characters });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(401).json({ error: "Faltan datos" });
  }
};

module.exports = postFav;
