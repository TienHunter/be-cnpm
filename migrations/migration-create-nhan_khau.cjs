"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Resident", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         maNhanKhau: { type: Sequelize.STRING },
         hoTen: { type: Sequelize.STRING },
         bietDanh: { type: Sequelize.STRING },
         namSinh: { type: Sequelize.DATE },
         gioiTinh: { type: Sequelize.STRING },
         soCMT: {
            type: Sequelize.STRING,
         },
         ngayCap: {
            type: Sequelize.DATE,
         },
         noiCap: {
            type: Sequelize.STRING,
         },
         noiSinh: { type: Sequelize.STRING },
         nguyenQuan: { type: Sequelize.STRING },
         danToc: { type: Sequelize.STRING },
         tonGiao: { type: Sequelize.STRING },
         quocTich: { type: Sequelize.STRING },
         soHoChieu: { type: Sequelize.STRING },
         noiThuongTru: { type: Sequelize.STRING },
         diaChiHienNay: { type: Sequelize.STRING },
         trinhDoHocVan: { type: Sequelize.STRING },
         trinhDoChuyenMon: { type: Sequelize.STRING },
         bietTiengDanToc: { type: Sequelize.STRING },
         trinhDoNgoaiNgu: { type: Sequelize.STRING },
         ngheNghiep: { type: Sequelize.STRING },
         noiLamViec: { type: Sequelize.STRING },
         tienAn: { type: Sequelize.STRING },
         ngayChuyenDen: { type: Sequelize.DATE },
         lyDoChuyenDen: { type: Sequelize.STRING },
         ngayChuyenDi: { type: Sequelize.DATE },
         lyDoChuyenDi: { type: Sequelize.STRING },
         diaChiMoi: { type: Sequelize.STRING },
         ngayTao: { type: Sequelize.DATE },
         idNguoiTao: { type: Sequelize.INTEGER },
         ngayXoa: { type: Sequelize.DATE },
         idNguoiXoa: { type: Sequelize.INTEGER },
         lyDoXoa: { type: Sequelize.STRING },
         ghiChu: { type: Sequelize.STRING },
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
      await queryInterface.dropTable("Resident");
   },
};
