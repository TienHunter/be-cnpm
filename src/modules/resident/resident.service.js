import Sequelize from "sequelize";
const Op = Sequelize.Op;
import db from "../../../models/index.cjs";

import { getHouseholdByHouseholdCode } from "../household/household.service.js";
let getAllResident = async () => {
   try {
      return await db.Resident.findAll({
         raw: true,
      });
   } catch (error) {
      throw error;
   }
};
let getResidentByHouseholdCode = async (householdCode) => {
   try {
      return await db.Resident.findAll({
         where: { householdCode },
         raw: true,
      });
   } catch (error) {
      throw error;
   }
};
let getResidentByFilterAndPaging = async (limit, offset, keyword) => {
   try {
      let { count, rows } = await db.Resident.findAndCountAll({
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

let deleteResidentByHouseholdCode = async (householdCode) => {
   try {
      return await db.Resident.destroy({
         where: { householdCode },
      });
   } catch (error) {
      throw error;
   }
};
let createResident = async (createBody) => {
   try {
      return await db.Resident.create({
         ...createBody,
      });
   } catch (error) {
      throw error;
   }
};
let deleteResidentByID = async (ResidentID) => {
   try {
      return await db.Resident.destroy({
         where: { id: ResidentID },
      });
   } catch (error) {
      throw error;
   }
};
export {
   getAllResident,
   getResidentByHouseholdCode,
   getResidentByFilterAndPaging,
   deleteResidentByHouseholdCode,
   createResident,
   deleteResidentByID,
};
