'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('destiantion_package_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destiantion_package_id: {
        type: Sequelize.INTEGER
      },
      start_date: {
        type: Sequelize.TIME
      },
      end_time: {
        type: Sequelize.TIME
      },
      activity: {
        type: Sequelize.STRING
      },
      activity_place: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('destiantion_package_details');
  }
};