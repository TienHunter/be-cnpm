import { HttpStatus, UserRole } from "../../constant.js";
import ErrorResponse from "../../utils/ErrorResponse.js";
import SuccessResponse from "../../utils/SuccessResponse.js";
import * as useService from "./services/user.service.js";

const getUserList = async (req, res) => {
   try {
      const accounts = await useService.getUserList();
      return res.status(HttpStatus.OK).json(new SuccessResponse(accounts));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};

export { getUserList };
