"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class People extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         People.belongsTo(models.Household, {
            foreignKey: "householdCode",
            targetKey: "householdCode",
         });
      }
   }
   People.init(
      {
         householdCode: DataTypes.STRING,
         name: DataTypes.STRING, // tên
         alias: DataTypes.STRING, // bí dánh
         dateOfBirth: DataTypes.DATE, // ngày sinh
         placeOfBirth: DataTypes.STRING, // nơi sinh
         origin: DataTypes.STRING, // nguyên quán
         nation: DataTypes.STRING, // dân tộc
         job: DataTypes.STRING, // nghề nghiệp
         jobPlace: DataTypes.STRING, // nơi làm việc
         identityNumber: DataTypes.STRING, // số CCCD
         identityPlace: DataTypes.STRING, // nơi cấp
         identityDate: DataTypes.DATE, // ngày cấp
      },
      {
         sequelize,
         modelName: "People",
         paranoid: true,
      }
   );
   return People;
};
