const { Router } = require('express');
// Importar todos los routers;

const getVideoByName = require("../controllers/getVideoByName");
const getVideogames = require("../controllers/getVideogames");
const getVideoById = require("../controllers/getVideoById");
const getGenres=require("../controllers/getGenres");
const postVideoGame = require("../controllers/postVideoGame");
const login = require('../controllers/login');
const postUser = require('../controllers/postUser');

const router = Router();

// Configurar los routers

router.get("/videogames/name", getVideoByName);
router.get("/videogames", getVideogames);
router.get("/videogames/:idVideogame", getVideoById);
router.get("/genres", getGenres);
router.post("/videogames", postVideoGame);
router.get("/login", login);
router.post("/register", postUser);

module.exports = router;




