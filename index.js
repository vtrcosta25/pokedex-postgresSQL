require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

// let pokemon = undefined;

// // Rotas
// app.get("/", (req, res) => {
//   res.render("index", { pokedex, pokemon });
// });

// app.get("/cadastro", (req,res) => {
//   res.render("cadastro", {pokedex});
// });

// app.post("/create", (req, res) => {
//   const pokemon = req.body;
//   pokemon.id = pokedex.length + 1;
//   pokedex.push(pokemon);
//   setTimeout(() => { res.redirect("/"); }, 5000);
// });

// app.get("/detalhes/:id", (req, res) => {
//   const id = +req.params.id;
//   pokemon = pokedex.find((pokemon) => pokemon.id === id);
//   res.render("detalhes", { pokedex, pokemon });
// });

// app.get("/atualizar/:id", (req,res) => {
//   let id = +req.params.id
//   const pokemon = pokedex.find(pokedex => pokedex.id === id);
//   res.render("update", {pokemon});
// });

// app.post("/update/:id", (req, res) => {
//   const id = +req.params.id - 1;
//   const newPokemon = req.body
//   newPokemon.id = id + 1
//   pokedex[id] = newPokemon;
//   pokemon = undefined;
//   res.redirect("/");
// });

// app.get("/delete/:id", (req, res) => {
//   const id = +req.params.id - 1;
//   delete pokedex[id]
//   res.redirect("/#cards");
// res.redirect("detalhes", { pokedex, pokemon });
// });

app.listen(port, () => {
  console.clear();
  console.log(`Servidor rodando em http://localhost:${port}`)
});