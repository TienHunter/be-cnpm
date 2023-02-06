import Joi from "joi";
import { MIN_PASSWORD_CHARACTER } from "../../constant.js";

const createTemporaryResidence = {
   body: Joi.object({
      idNhanKhau: Joi.number().positive().required(),
      maGiayTamtru: Joi.string().trim().allow("").optional(),
      soDienThoaiNguoiDangKy: Joi.string().trim().allow("").optional(),
      tuNgay: Joi.string().trim().allow("").optional(),
      denNgay: Joi.string().trim().allow("").optional(),
      lyDo: Joi.string().trim().allow("").optional(),
   }),
};
export { createTemporaryResidence };
