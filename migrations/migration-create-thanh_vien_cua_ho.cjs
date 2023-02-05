"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("MemberOfHousehold", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         idNhanKhau: { type: Sequelize.INTEGER },
         idHoKhau: { type: Sequelize.INTEGER },
         quanHeVoiChuHo: { type: Sequelize.STRING },
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
      await queryInterface.dropTable("MemberOfHousehold");
   },
};
