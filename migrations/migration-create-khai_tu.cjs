"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("DeathDeclaration", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         soGiayKhaiTu: { type: Sequelize.STRING },
         idNguoiKhai: { type: Sequelize.INTEGER },
         idNguoiChet: { type: Sequelize.INTEGER },
         ngayKhai: { type: Sequelize.DATE },
         ngayChet: { type: Sequelize.DATE },
         lyDoChet: { type: Sequelize.STRING },
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
      await queryInterface.dropTable("khai_tu");
   },
};
