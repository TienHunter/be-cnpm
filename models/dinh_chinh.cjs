"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Correction extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Correction.belongsTo(models.Household, {
            foreignKey: "idHoKhau",
            targetKey: "id",
         });
         Correction.belongsTo(models.User, {
            foreignKey: "nguoiThayDoi",
            targetKey: "id",
         });
      }
   }
   Correction.init(
      {
         idHoKhau: {
            type: DataTypes.INTEGER,
            references: {
               model: "Household",
               key: "id",
            },
         },
         thongtinThayDoi: DataTypes.STRING,
         thayDoiTu: DataTypes.STRING,
         thayDoiThanh: DataTypes.STRING,
         ngayThayDoi: DataTypes.DATE,
         nguoiThayDoi: {
            type: DataTypes.INTEGER,
            references: {
               model: "User",
               key: "id",
            },
         },
      },
      {
         sequelize,
         freezeTableName: true,
         paranoid: true,
      }
   );
   return Correction;
};
