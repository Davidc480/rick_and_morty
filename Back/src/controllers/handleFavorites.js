let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);

  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  const character = myFavorites.filter((char) => char.id !== Number(id));

  console.log(character);
  res.status(200).json(character);
};

module.exports = { postFav, deleteFav };
