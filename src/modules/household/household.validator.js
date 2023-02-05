import Joi from "joi";
const getList = {
   query: Joi.object({
      limit: Joi.number().integer().min(1).optional(),
      offset: Joi.number().integer().min(1).optional(),
      keyword: Joi.string().optional().allow(""),
   }),
};
const getHouseholdByID = {
   params: Joi.object({
      householdID: Joi.number().positive().required(),
   }),
};
const updateHouseholdByID = {
   params: Joi.object({
      householdID: Joi.number().positive().required(),
   }),
   body: Joi.object({
      maHoKhau: Joi.string().lowercase().required().trim(),
      idChuHo: Joi.number().positive().required(),
      maKhuVuc: Joi.string().lowercase().required().trim(),
      diaChi: Joi.string().lowercase().required().trim(),
      ngayChuyenDi: Joi.string().lowercase().trim().allow("").optional(),
      lyDoChuyen: Joi.string().lowercase().trim().allow("").optional(),
   }),
};
const createHousehold = {
   body: Joi.object({
      maHoKhau: Joi.string().lowercase().required().trim(),
      idChuHo: Joi.number().positive().required(),
      maKhuVuc: Joi.string().lowercase().required().trim(),
      diaChi: Joi.string().lowercase().required().trim(),
   }),
};
const deleteById = {
   params: Joi.object({
      householdID: Joi.number().positive().required(),
   }),
};
export {
   getHouseholdByID,
   updateHouseholdByID,
   createHousehold,
   getList,
   deleteById,
};
