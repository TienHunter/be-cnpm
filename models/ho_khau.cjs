"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Household extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Household.belongsTo(models.Resident, {
            foreignKey: "idChuHo",
            targetKey: "id",
            as: "householder",
         });
         Household.hasMany(models.Correction, {
            foreignKey: "idHoKhau",
            sourceKey: "id",
         });
         Household.hasMany(models.MemberOfHousehold, {
            foreignKey: "idHoKhau",
            sourceKey: "id",
         });
      }
   }
   Household.init(
      {
         maHoKhau: DataTypes.STRING,
         idChuHo: {
            type: DataTypes.INTEGER,
            references: {
               model: "Resident",
               key: "id",
            },
         },
         maKhuVuc: DataTypes.STRING,
         diaChi: DataTypes.STRING,
         ngayLap: DataTypes.DATE,
         ngayChuyenDi: DataTypes.DATE,
         lyDoChuyen: DataTypes.TEXT,
         nguoiThucHien: DataTypes.INTEGER,
      },
      {
         sequelize,
         freezeTableName: true,
         paranoid: true,
      }
   );
   return Household;
};
