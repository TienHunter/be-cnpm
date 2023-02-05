"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Resident extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         // Resident.hasOne(models.Identity, {
         //    foreignKey: "idNhanKhau",
         //    sourceKey: "id",
         // });
         Resident.hasOne(models.Household, {
            foreignKey: "idChuHo",
            sourceKey: "id",
         });
         Resident.hasMany(models.DeathDeclaration, {
            foreignKey: "idNguoiKhai",
            sourceKey: "id",
            as: "declarations",
         });
         Resident.hasOne(models.DeathDeclaration, {
            foreignKey: "idNguoiChet",
            sourceKey: "id",
            as: "death",
         });
         Resident.belongsTo(models.User, {
            foreignKey: "idNguoiTao",
            targetKey: "id",
            as: "createdBy",
         });
         Resident.belongsTo(models.User, {
            foreignKey: "idNguoiXoa",
            targetKey: "id",
            as: "deletedBy",
         });
         Resident.hasOne(models.User, {
            foreignKey: "idNhanKhau",
            sourceKey: "id",
            as: "account",
         });
         Resident.hasOne(models.TemporaryResidence, {
            foreignKey: "idNhanKhau",
            sourceKey: "id",
         });
         Resident.hasOne(models.TemporaryAbsent, {
            foreignKey: "idNhanKhau",
            sourceKey: "id",
         });
         Resident.hasOne(models.MemberOfHousehold, {
            foreignKey: "idNhanKhau",
            sourceKey: "id",
         });
         Resident.hasOne(models.Biography, {
            foreignKey: "idNhanKhau",
            sourceKey: "id",
         });
      }
   }
   Resident.init(
      {
         maNhanKhau: { type: DataTypes.STRING },
         hoTen: { type: DataTypes.STRING },
         bietDanh: { type: DataTypes.STRING },
         namSinh: { type: DataTypes.DATE },
         gioiTinh: { type: DataTypes.STRING },
         soCMT: {
            type: DataTypes.STRING,
         },
         ngayCap: {
            type: DataTypes.DATE,
         },
         noiCap: {
            type: DataTypes.STRING,
         },
         noiSinh: { type: DataTypes.STRING },
         nguyenQuan: { type: DataTypes.STRING },
         danToc: { type: DataTypes.STRING },
         tonGiao: { type: DataTypes.STRING },
         quocTich: { type: DataTypes.STRING },
         soHoChieu: { type: DataTypes.STRING },
         noiThuongTru: { type: DataTypes.STRING },
         diaChiHienNay: { type: DataTypes.STRING },
         trinhDoHocVan: { type: DataTypes.STRING },
         trinhDoChuyenMon: { type: DataTypes.STRING },
         bietTiengDanToc: { type: DataTypes.STRING },
         trinhDoNgoaiNgu: { type: DataTypes.STRING },
         ngheNghiep: { type: DataTypes.STRING },
         noiLamViec: { type: DataTypes.STRING },
         tienAn: { type: DataTypes.STRING },
         ngayChuyenDen: { type: DataTypes.DATE },
         lyDoChuyenDen: { type: DataTypes.STRING },
         ngayChuyenDi: { type: DataTypes.DATE },
         lyDoChuyenDi: { type: DataTypes.STRING },
         diaChiMoi: { type: DataTypes.STRING },
         ngayTao: { type: DataTypes.DATE },
         idNguoiTao: { type: DataTypes.INTEGER },
         ngayXoa: { type: DataTypes.DATE },
         idNguoiXoa: { type: DataTypes.INTEGER },
         lyDoXoa: { type: DataTypes.STRING },
         ghiChu: { type: DataTypes.STRING },
      },
      {
         sequelize,
         freezeTableName: true,
         paranoid: true,
      }
   );
   return Resident;
};
