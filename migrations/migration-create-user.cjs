"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("User", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         idNhanKhau: { type: Sequelize.INTEGER },
         username: { type: Sequelize.STRING },
         password: { type: Sequelize.STRING },
         role: { type: Sequelize.INTEGER },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         deletedAt: {
            type: Sequelize.DATE,
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("User");
   },
};
