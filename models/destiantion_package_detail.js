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
      destiantion_package_detail.belongsTo(models.destiantion_package, { foreignKey: "destination_package_detail_id" });
    }
  }
  destiantion_package_detail.init(
    {
      destiantion_package_id: DataTypes.INTEGER,
      start_date: DataTypes.TIME,
      end_time: DataTypes.TIME,
      activity: DataTypes.STRING,
      activity_place: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "destiantion_package_detail",
    }
  );
  return destiantion_package_detail;
};
