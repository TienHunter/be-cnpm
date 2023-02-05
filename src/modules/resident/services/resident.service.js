import Sequelize from "sequelize";
const Op = Sequelize.Op;
import db from "../../../../models/index.cjs";

let getList = async (query) => {
   try {
      const {
         page = 1,
         limit = 10,
         keyword = "",
         minAge,
         maxAge,
         gender,
      } = query;
      let dbQuery = {};
      if (keyword) {
         dbQuery = {
            ...dbQuery,
            [Op.or]: [
               {
                  maNhanKhau: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  hoTen: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  soCMT: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  bietDanh: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  nguyenQuan: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  danToc: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  tonGiao: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  quocTich: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  soHoChieu: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  noiThuongChu: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  diaChiHienNay: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  ngheNghiep: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
               {
                  noiLamViec: {
                     [Op.like]: `%${keyword}%`,
                  },
               },
            ],
         };
      }
      if (minAge) {
         dbQuery = {
            ...dbQuery,
            namSinh: {
               [Op.lte]: new Date(`${new Date().getFullYear() - minAge}`),
            },
         };
      }
      if (maxAge) {
         dbQuery = {
            ...dbQuery,
            namSinh: {
               [Op.gte]: new Date(`${new Date().getFullYear() - maxAge}`),
            },
         };
      }
      if (gender) {
         dbQuery = {
            ...dbQuery,
            gioiTinh: gender,
         };
      }

      const data = await db.Resident.findAndCountAll({
         limit: +limit || 1,
         offset: +limit * (+page - 1),
         order: [["createdAt", "DESC"]],
         where: dbQuery,
         // include: [
         //    {
         //       model: db.Identity,
         //       attributes: ["soCMT", "noiCap", "ngayCap"],
         //    },
         // ],
      });
      return { items: data.rows, totalItems: data.count };
   } catch (error) {
      throw error;
   }
};

// let getResidentByHouseholdCode = async (householdCode) => {
//    try {
//       return await db.Resident.findAll({
//          where: { householdCode },
//          raw: true,
//       });
//    } catch (error) {
//       throw error;
//    }
// };
let getResidentByID = async (residenID) => {
   try {
      return await db.Resident.findOne({
         where: { id: residenID },
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
let updateResidentByID = async (residenID, updateBody) => {
   try {
      return await db.Resident.update(
         {
            ...updateBody,
         },
         {
            where: { id: residenID },
         }
      );
   } catch (error) {
      throw error;
   }
};
export {
   // getResidentByHouseholdCode,
   createResident,
   deleteResidentByID,
   getResidentByID,
   updateResidentByID,
   getList,
};
