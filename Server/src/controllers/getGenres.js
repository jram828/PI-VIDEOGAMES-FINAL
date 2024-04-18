require('dotenv').config();
const { APIKEY } = process.env;
const URL ="https://api.rawg.io/api/genres?key=";
const axios = require("axios");
const { Sequelize } = require('sequelize');
const {Genre} = require('../db');


//console.log(APIKEY)
const getGenres = async (req, res) => {
  
  try {
    // console.log("URL:", `${URL}${APIKEY}`);
    const response = await axios.get(`${URL}${APIKEY}`);
    //console.log(response.data.results);
    if (response.data.results.length !== 0) {
      const resMod = response.data.results.map((genre) => {
        
        return { id: genre.id, name: genre.name};
        
       ; 
      })
        //console.log(resMod)
        resMod.forEach((genre) => {
          Genre.findOrCreate({
            where: {
              id: genre.id,
              name: genre.name
            }
          });
      });
      // console.log('results: ',resMod);
        res.status(200).json(response.data.results);
      }
    else {
      res.status(400).json({ message: "No genres were found" });
      //console.log(res.status);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getGenres;
