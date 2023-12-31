"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class destination_package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      destination_package.hasMany(models.order, { foreignKey: "destination_package_id" });
      destination_package.hasMany(models.destiantion_package_detail, { foreignKey: "destination_package_id" });
    }
  }
  destination_package.init(
    {
      destination_name: DataTypes.STRING,
      destination_package_review: DataTypes.INTEGER,
      package_price: DataTypes.INTEGER,
      image_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "destination_package",
    }
  );
  return destination_package;
};
