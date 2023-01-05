import Joi from "joi";

const getHouseholdByID = {
   params: Joi.object({
      householdID: Joi.string().lowercase().required().trim(),
   }),
};
const updateHouseholdByID = {
   params: Joi.object({
      householdID: Joi.string().lowercase().required().trim(),
   }),
   body: Joi.object({
      householdCode: Joi.string().lowercase().required().trim(),
      owner: Joi.string().lowercase().required().trim(),
      addressHouse: Joi.string().lowercase().required().trim(),
      precinct: Joi.string().lowercase().required().trim(),
      district: Joi.string().lowercase().required().trim(),
      city: Joi.string().lowercase().required().trim(),
   }),
};
const createHousehold = {
   body: Joi.object({
      householdCode: Joi.string().lowercase().required().trim(),
      owner: Joi.string().lowercase().required().trim(),
      addressHouse: Joi.string().lowercase().required().trim(),
      precinct: Joi.string().lowercase().required().trim(),
      district: Joi.string().lowercase().required().trim(),
      city: Joi.string().lowercase().required().trim(),
   }),
};
const getHouseholdsByFilter = {
   query: Joi.object().keys({
      pageSize: Joi.number().integer().min(1).optional(),
      pageNumber: Joi.number().integer().min(1).optional(),
      keyword: Joi.string().optional().allow(""),
   }),
};
export {
   getHouseholdByID,
   updateHouseholdByID,
   createHousehold,
   getHouseholdsByFilter,
};
