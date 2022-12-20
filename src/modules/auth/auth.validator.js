import Joi from "joi";
import { MIN_PASSWORD_CHARACTER } from "../../constant.js";

const login = {
   body: Joi.object({
      email: Joi.string().lowercase().required().trim(),
      password: Joi.string().min(MIN_PASSWORD_CHARACTER).required(),
   }),
};
export { login };
