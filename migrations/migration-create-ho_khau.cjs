"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Household", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         maHoKhau: {
            type: Sequelize.STRING,
         },
         idChuHo: {
            type: Sequelize.INTEGER,
         },
         maKhuVuc: {
            type: Sequelize.STRING,
         },
         diaChi: {
            type: Sequelize.STRING,
         },
         ngayLap: {
            type: Sequelize.DATE,
         },
         ngayChuyenDi: {
            type: Sequelize.DATE,
         },
         lyDoChuyen: {
            type: Sequelize.TEXT,
         },
         nguoiThucHien: {
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
      await queryInterface.dropTable("Household");
   },
};
