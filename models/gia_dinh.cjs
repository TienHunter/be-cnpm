"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Family extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Family.belongsTo(models.Resident, {
            foreignKey: "idNhanKhau",
            targetKey: "id",
         });
      }
   }
   Family.init(
      {
         idNhanKhau: {
            type: DataTypes.INTEGER,
            references: {
               model: "Resident",
               key: "id",
            },
         },
         hoTen: DataTypes.STRING,
         namSinh: DataTypes.DATE,
         gioiTinh: DataTypes.STRING,
         quanHeVoiNhanKhau: DataTypes.STRING,
         ngheNghiep: DataTypes.STRING,
         diaChiHienTai: DataTypes.STRING,
      },
      {
         sequelize,
         freezeTableName: true,
         paranoid: true,
      }
   );
   return Family;
};
