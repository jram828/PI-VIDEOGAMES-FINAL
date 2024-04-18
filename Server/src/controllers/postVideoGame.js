const { Videogame} = require("../db");


const postVideoGame = async (req, res) => {
  const { name, description, platforms, image, rating, genres, launchDate } = req.body;
  //console.log('Platforms: ',platforms)
  if (!name || !description || !platforms||!image||!rating) {
    res.status(400).send("Faltan datos");
  } else {
    try {
      var newVideogame = await Videogame.create(
        { name, description, platforms, image, rating, genres, launchDate},
      );
      //console.log("GEnres TRy: ", newVideogame);
      newVideogame.addGenres(genres);

      return res.status(200).json(newVideogame);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = postVideoGame;
