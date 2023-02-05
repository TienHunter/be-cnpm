"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Family", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         idNhanKhau: {
            type: Sequelize.INTEGER,
         },
         hoTen: {
            type: Sequelize.STRING,
         },
         namSinh: {
            type: Sequelize.DATE,
         },
         gioiTinh: {
            type: Sequelize.STRING,
         },
         quanHeVoiNhanKhau: {
            type: Sequelize.STRING,
         },
         ngheNghiep: {
            type: Sequelize.STRING,
         },
         diaChiHienTai: {
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
            type: Sequelize.DATE,
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("Family");
   },
};
