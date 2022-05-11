const res = require("express/lib/response");
const Pokemon = require("../models/Pokemon");

let message = "";
let type = "";

const getAll = async (req, res) => {
  try {
    setTimeout(() => {
      message = ""
      type = ""
    }, 1000)

    const pokedex = await Pokemon.findAll();
    res.render("index", {
      pokedex,
      pokemonPut: null,
      pokemonDel: null,
      message,
      type,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const signup = (req, res) => {
  try {
    res.render("signup", { message, type });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const pokemon = req.body;

    if (!pokemon.nome || !pokemon.descricao ||!pokemon.tipo || !pokemon.imagem) {
      message = "Preencha todos os campos para cadastrar!";
      type = "danger";
      return res.redirect("/signup");
    }

    await Pokemon.create(pokemon);
    message = "Pokemon criado com sucesso";
    type = "sucess";
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
        message,
        type,
      });
    } else {
      res.render("index", {
        pokedex,
        pokemonPut: null,
        pokemonDel: pokemon,
        message,
        type,
      });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const pokemon = req.body;
    await Pokemon.update(pokemon, { where: { id: req.params.id } });
    message = "Pokemon atualizado com sucesso";
    type = "sucess";
    res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    await Pokemon.destroy({ where: { id: req.params.id } });
    message = "Pokemon deletado com sucesso";
    type = "sucess";
    res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAll,
  signup,
  create,
  getById,
  update,
  remove,
};
