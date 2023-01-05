"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Household extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Household.hasMany(models.People);
      }
   }
   Household.init(
      {
         householdCode: DataTypes.STRING,
         owner: DataTypes.STRING,
         addressHouse: DataTypes.STRING,
         precinct: DataTypes.STRING,
         district: DataTypes.STRING,
         city: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "Household",
         // paranoid: true,
      }
   );
   return Household;
};
