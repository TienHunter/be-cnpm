"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Biography extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Biography.belongsTo(models.Resident, {
            foreignKey: "idNhanKhau",
            targetKey: "id",
         });
      }
   }
   Biography.init(
      {
         idNhanKhau: { type: DataTypes.INTEGER },
         tuNgay: { type: DataTypes.DATE },
         denNgay: { type: DataTypes.DATE },
         diaChi: { type: DataTypes.STRING },
         ngheNghiep: { type: DataTypes.STRING },
         noiLamViec: { type: DataTypes.STRING },
      },
      {
         sequelize,
         freezeTableName: true,
         paranoid: true,
      }
   );
   return Biography;
};
