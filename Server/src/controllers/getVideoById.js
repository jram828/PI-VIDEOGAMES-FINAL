//https://api.rawg.io/api/games/{id}
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, APIKEY } = process.env;
const URL = "https://api.rawg.io/api/games/";
const axios = require("axios");
const {Videogame,Genre} = require("../db");
const cleanVideogameAPI = require("../utils/cleanVideogameAPI");
const cleanVideogameDB = require("../utils/cleanVideogameDB");

const getVideoById = async (req, res) => {
  const ID = req.params.idVideogame;
  try {
    //console.log('Response:',response)
     if (ID.length === 36) {
      //console.log("ID getbyID:", ID);
      const responseDB = await Videogame.findOne({
        where: {
            id:ID,
          },
        include: [
          {
            model: Genre,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });

       var videogame = cleanVideogameDB(responseDB.dataValues);
        //console.log('Videogame getbyID: ',responseDB)
      //console.log("videogame getbyiD: ", videogame.genres[0].dataValues.name);
    } else {
        const response = await axios.get(`${URL}${ID}?key=${APIKEY}`);
        const { id, name, description_raw, platforms, background_image, release, rating, genres } =
          response.data;
         //console.log('Image by id:', response.data)
      var videogame =cleanVideogameAPI(response.data)
      //console.log("videogame getbyiD: ", videogame);
      }
        res.status(200).json(videogame);
    
  } catch (error) {
    // console.log('Aqui se rompe');
    res.status(500).json({ message: error.message });
  }
};

module.exports = getVideoById;