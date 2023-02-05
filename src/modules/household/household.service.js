import Sequelize from "sequelize";
const Op = Sequelize.Op;
import db from "../../../models/index.cjs";
// import { deleteResidentByHouseholdCode } from "../resident/services/resident.service.js";
let getList = async (query) => {
   try {
      const { page = 1, limit = 10, keyword = "" } = query;
      let dbQuery = {};
      if (keyword) {
         dbQuery = {
            ...dbQuery,
            [Op.or]: [
               {
                  maHoKhau: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  maKhuVuc: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  diaChi: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
            ],
         };
      }

      const data = await db.Household.findAndCountAll({
         limit: +limit || 1,
         offset: +limit * (+page - 1),
         order: [["createdAt", "DESC"]],
         where: dbQuery,
         include: [
            {
               model: db.Resident,
               attributes: ["hoTen", "namSinh", "gioiTinh", "soCMT"],
               as: "householder",
            },
         ],
      });
      return { items: data.rows, totalItems: data.count };
   } catch (error) {
      throw error;
   }
};
let getHouseholdByID = async (householdID) => {
   try {
      return await db.Household.findOne({
         where: { id: householdID },
         include: [
            {
               model: db.Resident,
               attributes: ["hoTen", "namSinh", "gioiTinh", "soCMT"],
               as: "householder",
            },
         ],
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

let deleteHouseholdByID = async (householdID) => {
   try {
      return await db.Household.destroy({
         where: { id: householdID },
      });
   } catch (error) {
      throw error;
   }
};

export {
   getList,
   getHouseholdByID,
   updateHouseholdByID,
   createHousehold,
   deleteHouseholdByID,
};
