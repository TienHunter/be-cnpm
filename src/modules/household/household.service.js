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

      if (household) {
         await deleteResidentByHouseholdCode(household.householdCode);
         await db.Household.destroy({
            where: { id: householdID },
         });
      }
   } catch (error) {
      throw error;
   }
};
let getHouseholdByHouseholdCode = async (householdCode) => {
   try {
      return await db.Household.findOne({
         where: { householdCode: householdCode },
         raw: true,
      });
   } catch (error) {
      throw error;
   }
};
const getHouseholdsByFilter = async (
   pageSize = 20,
   pageNumber = 1,
   keyword = ""
) => {
   try {
      let totalRecords = 0;
      let includeObj = {
         limit: pageSize - 0,
         offset: (pageNumber - 1) * pageSize,
         raw: true,
      };
      if (keyword && keyword.trim() !== "") {
         includeObj.where = {
            [Op.or]: [
               {
                  householdCode: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  owner: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  addressHouse: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  precinct: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
            ],
         };
         totalRecords = await db.Household.count({
            where: {
               ...includeObj.where,
            },
         });
      } else {
         totalRecords = await db.Household.count();
      }
      let households = await db.Household.findAll({ ...includeObj });

      return {
         households,
         totalRecords,
         // pageSize,
         // pageNumber,
         // keyword,
      };
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
   getHouseholdsByFilter,
};
