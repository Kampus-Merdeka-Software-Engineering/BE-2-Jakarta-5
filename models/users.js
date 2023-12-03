"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      user_id: DataTypes.INTEGER,
      destination_package_id: DataTypes.INTEGER,
      nik: DataTypes.STRING,
      username: DataTypes.STRING,
      useraddress: DataTypes.STRING,
      order_date: DataTypes.DATE,
      total_person: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
