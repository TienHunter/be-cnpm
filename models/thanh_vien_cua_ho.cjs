"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class MemberOfHousehold extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         MemberOfHousehold.belongsTo(models.Household, {
            foreignKey: "idHoKhau",
            sourceKey: "id",
         });
         MemberOfHousehold.belongsTo(models.Resident, {
            foreignKey: "idNhanKhau",
            sourceKey: "id",
         });
      }
   }
   MemberOfHousehold.init(
      {
         idNhanKhau: { type: DataTypes.INTEGER },
         idHoKhau: { type: DataTypes.INTEGER },
         quanHeVoiChuHo: { type: DataTypes.STRING },
      },
      {
         sequelize,
         freezeTableName: true,
         paranoid: true,
      }
   );
   return MemberOfHousehold;
};
