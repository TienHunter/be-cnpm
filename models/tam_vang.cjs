"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class TemporaryAbsent extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         TemporaryAbsent.belongsTo(models.Resident, {
            foreignKey: "idNhanKhau",
            targetKey: "id",
         });
      }
   }
   TemporaryAbsent.init(
      {
         idNhanKhau: { type: DataTypes.INTEGER },
         maGiayTamVang: { type: DataTypes.STRING },
         noiTamtru: { type: DataTypes.STRING },
         tuNgay: { type: DataTypes.DATE },
         denNgay: { type: DataTypes.DATE },
         lyDo: { type: DataTypes.STRING },
      },
      {
         sequelize,
         freezeTableName: true,
         paranoid: true,
      }
   );
   return TemporaryAbsent;
};
