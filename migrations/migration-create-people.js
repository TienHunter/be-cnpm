"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Peoples", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         householdCode: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         name: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         alias: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         dateOfBirth: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         placeOfBirth: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         origin: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         nation: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         job: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         jobPlace: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         identityNumber: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         identityPlace: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         identityDate: {
            allowNull: false,
            type: Sequelize.DATE,
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
      await queryInterface.dropTable("Peoples");
   },
};
