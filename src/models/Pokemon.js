const Sequelize = require("sequelize");
const connection = require("../database/db");

const Pokemon = connection.define("pokemon", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    autoIncrement: false,
  },
  descricao: {
    type: Sequelize.STRING,
    autoIncrement: false,
  },
  tipo: {
    type: Sequelize.STRING,
    autoIncrement: false,
  },
  imagem: {
    type: Sequelize.STRING,
    autoIncrement: false,
  },
}, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updateAt: false,
   }
);

module.exports = Pokemon;