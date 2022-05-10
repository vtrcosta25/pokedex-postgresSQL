const res = require("express/lib/response");
const Pokemon = require("../models/Pokemon");

const getAll = async (req, res) => {
  try {
    const pokedex = await Pokemon.findAll();
    res.render("index", { pokedex, pokemon: undefined });
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
    const pokemon = req.body

    if(!pokemon) {
      return res.redirect("/signup")
    }

    await Pokemon.create(pokemon);
    res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAll,
  signup,
  create,
};
