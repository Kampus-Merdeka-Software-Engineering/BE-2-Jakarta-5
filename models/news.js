"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class news extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  news.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      body: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      news_url: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      img_url: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "news",
    }
  );
  return news;
};
