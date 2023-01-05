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
         Resident.belongsTo(models.Household, {
            foreignKey: "householdCode",
            targetKey: "householdCode",
         });
      }
   }

   Resident.init(
      {
         householdCode: DataTypes.STRING,
         name: DataTypes.STRING, // tên
         gender: DataTypes.INTEGER, // giới tính
         alias: DataTypes.STRING, // bí danh
         dateOfBirth: DataTypes.DATE, // ngày sinh
         placeOfBirth: DataTypes.STRING, // nơi sinh
         origin: DataTypes.STRING, // nguyên quán
         nation: DataTypes.STRING, // dân tộc
         religion: DataTypes.STRING, // tom giao
         job: DataTypes.STRING, // nghề nghiệp
         jobPlace: DataTypes.STRING, // nơi làm việc
         identityNumber: DataTypes.STRING, // số CCCD
         identityPlace: DataTypes.STRING, // nơi cấp
         identityDate: DataTypes.DATE, // ngày cấp
         addressBeforeArrive: DataTypes.STRING, // địa chỉ thường trú trước khi chuyển đến
         relation: DataTypes.STRING, // quan hệ với chủ hộ
      },
      {
         sequelize,
         modelName: "Resident",
         // paranoid: true,
      }
   );
   return Resident;
};
