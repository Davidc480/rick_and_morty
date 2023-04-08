const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;

  const character = Favorite.findByPk(id);
  const characters = Favorite.findAll();

  if (character) {
    try {
      await character.destroy();
      res.status(200).json({ characters });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
  }
};

module.exports = deleteFav;
