const { DataTypes } = require('sequelize');
const sequelize = require('../database/db'); // Assuming you have a separate db.js file for Sequelize initialization

const Word = sequelize.define('Word', {
  word: {
    type: DataTypes.STRING,
    allowNull: false
  }
  // Add more columns as needed
});

module.exports = Word;