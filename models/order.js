"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      faq_messange.belongsTo(models.users, { foreignKey: "user_id" });
      faq_messange.belongsTo(models.destination_package, { foreignKey: "destination_package_id" });
    }
  }
  order.init(
    {
      user_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      destination_package_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      nik: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      username: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      useraddress: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      order_date: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      total_person: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      total_price: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
