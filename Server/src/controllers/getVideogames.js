require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, APIKEY } = process.env;
const URL = "https://api.rawg.io/api/games?key=";
const axios = require("axios");
const { Videogame, Genre } = require("../db");
const cleanVideogameAPI = require("../utils/cleanVideogameAPI");
const cleanVideogameDB = require("../utils/cleanVideogameDB");

const getVideogames = async (req, res) => {
  let videogamesAPIRaw=[];
  try {
    const responseDB = await Videogame.findAll({
      include: {
        model: Genre,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    const videogamesDB = responseDB.map((videogame) => {
      return cleanVideogameDB(videogame);
    });
    //console.log("Videogames DB", videogamesDB);
    //console.log("URL:", `${URL}${APIKEY}`);

    for (let i = 1; i < 6; i++) {
      const response = await axios.get(`${URL}${APIKEY}&page=${i}`);
      const videogamesAPIPage = response.data.results.map((videogame) => {
        return cleanVideogameAPI(videogame);
      });
      videogamesAPIRaw.push(videogamesAPIPage);
    }
    const videogamesAPI = videogamesAPIRaw.flat();
    //console.log("Videogames API length", videogamesAPI.length);

    res.status(200).json([...videogamesDB, ...videogamesAPI]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getVideogames;
