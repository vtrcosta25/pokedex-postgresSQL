const routes = require('express').Router();
const PokemonController = require('../controllers/PokemonController')

routes.get("/", PokemonController.getAll);
routes.get("/signup", PokemonController.signup)
routes.post("/create", PokemonController.create);
routes.get("/getById/:id/:method", PokemonController.getById);


module.exports = routes;