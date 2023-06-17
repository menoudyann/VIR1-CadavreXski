const { DataTypes } = require('sequelize');
const { sequelize } = require("../database/db")
const Word = sequelize.define('Word', {
  word: {
    type: DataTypes.STRING,
    allowNull: false
  }
  // Add more columns as needed
});

module.exports = Word;