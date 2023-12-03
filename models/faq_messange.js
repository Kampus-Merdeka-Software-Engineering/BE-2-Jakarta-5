"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class faq_messange extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      faq_messange.belongsTo(models.users, { foreignKey: "user_id" });
    }
  }
  faq_messange.init(
    {
      users_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user_messange: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "faq_messange",
    }
  );
  return faq_messange;
};
