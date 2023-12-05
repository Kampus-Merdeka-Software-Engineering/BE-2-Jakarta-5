"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class destiantion_package_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      destiantion_package_detail.belongsTo(models.destination_package, { foreignKey: "destination_package_id" });
    }
  }
  destiantion_package_detail.init(
    {
      start_time: {
        allowNull: false,
        type: DataTypes.TIME,
      },
      end_time: {
        allowNull: false,
        type: DataTypes.TIME,
      },
      activity: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      activity_place: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      destination_package_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "destiantion_package_detail",
    }
  );
  return destiantion_package_detail;
};
