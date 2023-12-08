const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_PRODUCTION_DATABASE,
  process.env.DB_PRODUCTION_USERNAME,
  process.env.DB_PRODUCTION_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    // logging: false,
  }
);

module.exports = sequelize;
