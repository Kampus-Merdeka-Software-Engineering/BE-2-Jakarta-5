'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class destination_package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  destination_package.init({
    destiantion_name: DataTypes.STRING,
    destination_package_review: DataTypes.INTEGER,
    package_price: DataTypes.INTEGER,
    image_url: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'destination_package',
  });
  return destination_package;
};