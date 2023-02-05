"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class TemporaryResidence extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         TemporaryResidence.belongsTo(models.Resident, {
            foreignKey: "idNhanKhau",
            targetKey: "id",
         });
      }
   }
   TemporaryResidence.init(
      {
         idNhanKhau: { type: DataTypes.INTEGER },
         maGiayTamtru: { type: DataTypes.STRING },
         soDienThoaiNguoiDangKy: { type: DataTypes.STRING },
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
   return TemporaryResidence;
};
