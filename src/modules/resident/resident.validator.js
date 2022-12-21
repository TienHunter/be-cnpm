import Joi from "joi";

const getResidentByHouseholdCode = {
   params: Joi.object({
      householdCode: Joi.string().lowercase().required().trim(),
   }),
};
const getResidentByID = {
   params: Joi.object({
      residentID: Joi.string().lowercase().required().trim(),
   }),
};
const createResident = {
   params: Joi.object({
      householdCode: Joi.string().lowercase().required().trim(),
   }),
   body: Joi.object({
      name: Joi.string().lowercase().required().trim(),
      gender: Joi.number().integer().required(),
      alias: Joi.string().lowercase().required().trim(),
      dateOfBirth: Joi.string().lowercase().required().trim(),
      placeOfBirth: Joi.string().lowercase().required().trim(),
      origin: Joi.string().lowercase().required().trim(),
      nation: Joi.string().lowercase().required().trim(),
      religion: Joi.string().lowercase().required().trim(),
      job: Joi.string().lowercase().required().trim(),
      jobPlace: Joi.string().lowercase().required().trim(),
      identityNumber: Joi.string().lowercase().required().trim(),
      identityPlace: Joi.string().lowercase().required().trim(),
      identityDate: Joi.string().lowercase().required().trim(),
      addressBeforeArrive: Joi.string().lowercase().required().trim().allow(""),
      relation: Joi.string().lowercase().required().trim(),
      moveDate: Joi.string().optional(),
      movePlace: Joi.string().optional(),
   }),
};
const updateResident = {
   body: Joi.object({
      id: Joi.number().integer().required(),
      name: Joi.string().lowercase().required().trim(),
      householdCode: Joi.string().lowercase().required().trim(),
      gender: Joi.number().integer().required(),
      alias: Joi.string().lowercase().required().trim(),
      dateOfBirth: Joi.string().lowercase().required().trim(),
      placeOfBirth: Joi.string().lowercase().required().trim(),
      origin: Joi.string().lowercase().required().trim(),
      nation: Joi.string().lowercase().required().trim(),
      religion: Joi.string().lowercase().required().trim(),
      job: Joi.string().lowercase().required().trim(),
      jobPlace: Joi.string().lowercase().required().trim(),
      identityNumber: Joi.string().lowercase().required().trim(),
      identityPlace: Joi.string().lowercase().required().trim(),
      identityDate: Joi.string().lowercase().required().trim(),
      addressBeforeArrive: Joi.string().lowercase().required().trim().allow(""),
      relation: Joi.string().lowercase().required().trim(),
      moveDate: Joi.string().optional(),
      movePlace: Joi.string().optional(),
   }),
};
export {
   getResidentByHouseholdCode,
   getResidentByID,
   createResident,
   updateResident,
};
