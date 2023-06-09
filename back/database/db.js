const Sequelize = require("sequelize");

const sequelize = new Sequelize(
 'vir1-db',
 'root',
 'root',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;