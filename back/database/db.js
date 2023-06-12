const Sequelize = require("sequelize");
const database_host = process.env.DATABASE_HOST
const database_port = process.env.DATABASE_PORT
const database_type = process.env.DATABASE_TYPE
const database_name = process.env.DATABASE_NAME
const database_user = process.env.DATABASE_USER
const database_password = process.env.DATABASE_PASSWORD

const sequelize = new Sequelize(
 database_name,
 database_user,
 database_password,
  {
    host: database_host,
    dialect: database_type,
    define:{
      timestamps: false
    },
  }
);

module.exports = sequelize;
