import Sequelize from "sequelize";
const Op = Sequelize.Op;
import db from "../../../models/index.cjs";
import { deleteResidentByHouseholdCode } from "../resident/resident.service.js";
let getAllHouseholds = async () => {
   try {
      return await db.Household.findAll({
         raw: true,
      });
   } catch (error) {
      throw error;
   }
};
let getHouseholdByID = async (householdID) => {
   try {
      return await db.Household.findOne({
         where: { id: householdID },
         raw: true,
      });
   } catch (error) {
      throw error;
   }
};
let createHousehold = async (createBody) => {
   try {
      return await db.Household.create({
         ...createBody,
      });
   } catch (error) {
      throw error;
   }
};
let updateHouseholdByID = async (householdID, updateBody) => {
   try {
      delete updateBody.id;
      return await db.Household.update(
         {
            ...updateBody,
         },
         {
            where: { id: householdID },
         }
      );
   } catch (error) {
      throw error;
   }
};
let getHouseholdByFilterAndPaging = async (limit, offset, keyword) => {
   try {
      let { count, rows } = await db.Household.findAndCountAll({
         where: {
            [Op.like]: `%${keyword}%}`,
         },
         offset: offset,
         limit: limit,
      });
      return {
         data: rows,
         TotalRecords: count,
         PageSize: limit,
      };
   } catch (error) {
      throw error;
   }
};
let deleteHouseholdByID = async (householdID) => {
   try {
      let household = await getHouseholdByID(householdID);
      let rowAffect = await db.Household.destroy({
         where: { id: householdID },
      });
      if (rowAffect > 0) {
         await deletePeopleByHouseholdCode(household.householdCode);
      }
   } catch (error) {
      throw error;
   }
};
let getHouseholdByHouseholdCode = async (householdCode) => {
   try {
      return await db.Household.findOne({
         where: { householdCode },
         raw: true,
      });
   } catch (error) {
      throw error;
   }
};
export {
   getAllHouseholds,
   getHouseholdByID,
   updateHouseholdByID,
   getHouseholdByFilterAndPaging,
   createHousehold,
   deleteHouseholdByID,
   getHouseholdByHouseholdCode,
};
