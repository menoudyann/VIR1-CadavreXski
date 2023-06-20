const Sequelize = require("sequelize");
const database_host = process.env.DATABASE_HOST
const database_port = process.env.DATABASE_PORT
const database_type = process.env.DATABASE_TYPE
const database_name = process.env.DATABASE_NAME
const database_user = process.env.DATABASE_USER
const database_password = process.env.DATABASE_PASSWORD

const sequelize = new Sequelize({
  dialect: database_type,
  host: database_host,
  database: database_name,
  username: database_user,
  password: database_password,
  port: database_port,
  logging: false,
  define: {
    timestamps: false // désactive les timestamps pour tous les modèles
  }
});

module.exports = {sequelize}
