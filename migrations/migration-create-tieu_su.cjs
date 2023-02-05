"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Biography", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         idNhanKhau: { type: Sequelize.INTEGER },
         tuNgay: { type: Sequelize.DATE },
         denNgay: { type: Sequelize.DATE },
         diaChi: { type: Sequelize.STRING },
         ngheNghiep: { type: Sequelize.STRING },
         noiLamViec: { type: Sequelize.STRING },
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
      await queryInterface.dropTable("Biography");
   },
};
