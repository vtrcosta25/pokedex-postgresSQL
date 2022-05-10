const res = require("express/lib/response");
const Pokemon = require("../models/Pokemon");

const getAll = async (req, res) => {
  try {
    const pokedex = await Pokemon.findAll();
    res.render("index", { pokedex, pokemonPut: null,
      pokemonDel: null });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const signup = (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const pokemon = req.body;

    if (!pokemon) {
      return res.redirect("/signup");
    }

    await Pokemon.create(pokemon);
    res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const pokedex = await Pokemon.findAll();
    const pokemon = await Pokemon.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        pokedex,
        pokemonPut: pokemon,
        pokemonDel: null,
      });
    } else {
      res.render("index", {
        pokedex,
        pokemonPut: null,
        pokemonDel: pokemon,
      });
    }
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

const update = (req, res) => {

}

module.exports = {
  getAll,
  signup,
  create,
  getById,
};
