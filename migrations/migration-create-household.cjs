"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Households", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         householdCode: {
            allowNull: false,
            unique: true,
            type: Sequelize.STRING,
         },
         owner: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         addressHouse: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         precinct: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         district: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         city: {
            allowNull: false,
            type: Sequelize.STRING,
         },

         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         deletedAt: {
            allowNull: true,
            type: Sequelize.DATE,
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("Households");
   },
};
