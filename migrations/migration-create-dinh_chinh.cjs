"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Correction", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         idHoKhau: {
            type: Sequelize.INTEGER,
         },
         thongTinThayDoi: {
            type: Sequelize.STRING,
         },
         thayDoiTu: {
            type: Sequelize.STRING,
         },
         thayDoiThanh: {
            type: Sequelize.STRING,
         },
         nguoiThayDoi: {
            type: Sequelize.INTEGER,
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
      await queryInterface.dropTable("Correction");
   },
};
