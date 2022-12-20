import Joi from "joi";

const getHouseholdByID = {
   params: Joi.object({
      householdID: Joi.string().lowercase().required().trim(),
   }),
};
export { getHouseholdByID };
