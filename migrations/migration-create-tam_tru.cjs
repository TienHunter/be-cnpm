"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("TemporaryResidence", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         idNhanKhau: { type: Sequelize.INTEGER },
         maGiayTamtru: { type: Sequelize.STRING },
         soDienThoaiNguoiDangKy: { type: Sequelize.STRING },
         tuNgay: { type: Sequelize.DATE },
         denNgay: { type: Sequelize.DATE },
         lyDo: { type: Sequelize.STRING },
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
      await queryInterface.dropTable("TemporaryResidence");
   },
};
