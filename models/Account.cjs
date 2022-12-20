"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Account extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
      }
   }
   Account.init(
      {
         usename: DataTypes.STRING,
         password: DataTypes.STRING,
         role: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "Account",
         paranoid: true,
      }
   );
   return Account;
};
