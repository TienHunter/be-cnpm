"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         User.hasMany(models.Correction, {
            foreignKey: "nguoiThayDoi",
            sourceKey: "id",
         });
         User.hasMany(models.Resident, {
            foreignKey: "idNguoiTao",
            sourceKey: "id",
            as: "createdBy",
         });
         User.hasMany(models.Resident, {
            foreignKey: "idNguoiXoa",
            sourceKey: "id",
            as: "deletedBy",
         });
         User.belongsTo(models.Resident, {
            foreignKey: "idNhanKhau",
            targetKey: "id",
            as: "resident",
         });
      }
   }
   User.init(
      {
         idNhanKhau: { type: DataTypes.INTEGER },
         username: { type: DataTypes.STRING },
         password: { type: DataTypes.STRING },
         role: { type: DataTypes.INTEGER },
      },
      {
         sequelize,
         freezeTableName: true,
         paranoid: true,
      }
   );
   return User;
};
