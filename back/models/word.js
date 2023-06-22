const { DataTypes } = require('sequelize');
const { sequelize } = require("../database/db")
const Word = sequelize.define('word', {
  word: {
    type: DataTypes.STRING,
    allowNull: false
  }
  // Ajoutez d'autres colonnes si nécessaire
}, {
  timestamps: false // Exclut les timestamps
});
module.exports = Word;
