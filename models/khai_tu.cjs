"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class DeathDeclaration extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         DeathDeclaration.belongsTo(models.Resident, {
            foreignKey: "idNguoiKhai",
            targetKey: "id",
            as: "declarant",
         });
         DeathDeclaration.belongsTo(models.Resident, {
            foreignKey: "idNguoiChet",
            targetKey: "id",
            as: "deadMan",
         });
      }
   }
   DeathDeclaration.init(
      {
         soGiayKhaiTu: { type: DataTypes.STRING },
         idNguoiKhai: {
            type: DataTypes.INTEGER,
            references: {
               model: "Resident",
               key: "id",
            },
         },
         idNguoiChet: {
            type: DataTypes.INTEGER,
            references: {
               model: "Resident",
               key: "id",
            },
         },
         ngayKhai: { type: DataTypes.DATE },
         ngayChet: { type: DataTypes.DATE },
         lyDoChet: { type: DataTypes.STRING },
      },
      {
         sequelize,
         freezeTableName: true,
         paranoid: true,
      }
   );
   return DeathDeclaration;
};
