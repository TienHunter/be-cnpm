"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable(
         "Residents",
         {
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
            gender: {
               allowNull: false,
               type: Sequelize.INTEGER,
            },
            alias: {
               allowNull: true,
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
            religion: {
               allowNull: true,
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
            addressBeforeArrive: {
               allowNull: false,
               type: Sequelize.STRING,
            },
            relation: {
               allowNull: false,
               type: Sequelize.STRING,
            },
            moveDate: {
               type: Sequelize.DATE,
            },
            movePlace: {
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
         },
         { freezeTableName: true, timestamps: false } //add both options here
      );
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("Residents");
   },
};
