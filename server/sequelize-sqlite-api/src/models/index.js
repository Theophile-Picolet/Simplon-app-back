const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const Blague = sequelize.define("Blagues", {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  response: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

const db = {
  sequelize,
  Sequelize,
  Blague,
};

module.exports = db;
