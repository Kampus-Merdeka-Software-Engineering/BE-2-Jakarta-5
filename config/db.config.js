const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  // process.env.DB_PRODUCTION_DATABASE,
  // process.env.DB_PRODUCTION_USERNAME,
  // process.env.DB_PRODUCTION_PASSWORD,
  {
    username: process.env.DB_PRODUCTION_USERNAME,
    password: process.env.DB_PRODUCTION_PASSWORD,
    database: process.env.DB_PRODUCTION_DATABASE,
    host: process.env.DB_PRODUCTION_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    // logging: false,
  }
);

module.exports = sequelize;
