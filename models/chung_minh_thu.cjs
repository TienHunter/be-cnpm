"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Identity extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Identity.belongsTo(models.Resident, {
            foreignKey: "idNhanKhau",
            targetKey: "id",
         });
      }
   }
   Identity.init(
      {
         idNhanKhau: {
            type: DataTypes.INTEGER,
            references: {
               model: "Resident",
               key: "id",
            },
         },
         soCMT: DataTypes.STRING,
         ngayCap: DataTypes.DATE,
         noiCap: DataTypes.STRING,
      },
      {
         sequelize,
         freezeTableName: true,
         paranoid: true,
      }
   );
   return Identity;
};
