import db from "../../../../models/index.cjs";
let getTemporaryResidenceList = async () => {
   try {
      return await db.TemporaryResidence.findAll({
         include: [
            {
               model: db.Resident,
               attributes: ["soCMT", "hoTen"],
            },
         ],
      });
   } catch (error) {
      throw error;
   }
};
let getTemporaryResidenceById = async (id) => {
   try {
      return await db.TemporaryResidence.findOne({
         where: {
            id,
         },
         include: [
            {
               model: db.Resident,
               attributes: ["soCMT", "hoTen"],
            },
         ],
      });
   } catch (error) {
      throw error;
   }
};
let getTemporaryResidenceByResidenceId = async (residentId) => {
   try {
      return await db.TemporaryResidence.findAll({
         where: { idNhanKhau: residentId },
         include: [
            {
               model: db.Resident,
               attributes: ["soCMT", "hoTen"],
            },
         ],
      });
   } catch (error) {
      throw error;
   }
};
let createTemporaryResidence = async (createBody) => {
   try {
      return await db.TemporaryResidence.create({ ...createBody });
   } catch (error) {
      throw error;
   }
};
let updateTemporaryResidence = async (id, updateBody) => {
   try {
      return await db.TemporaryResidence.update(
         {
            ...updateBody,
         },
         {
            where: { id },
         }
      );
   } catch (error) {
      throw error;
   }
};
let deleteTemporaryResidence = async (id) => {
   try {
      return await db.TemporaryResidence.destroy({ where: id });
   } catch (error) {
      throw error;
   }
};
export {
   getTemporaryResidenceList,
   getTemporaryResidenceById,
   getTemporaryResidenceByResidenceId,
   createTemporaryResidence,
   updateTemporaryResidence,
   deleteTemporaryResidence,
};
