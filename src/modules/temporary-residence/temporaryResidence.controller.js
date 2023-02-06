import { HttpStatus, UserRole } from "../../constant.js";
import ErrorResponse from "../../utils/ErrorResponse.js";
import SuccessResponse from "../../utils/SuccessResponse.js";
import * as temporaryResidenceService from "./services/temporaryResidence.service.js";

const getTemporaryResidenceList = async (req, res) => {
   try {
      const temporaryResidenceList =
         await temporaryResidenceService.getTemporaryResidenceList();
      return res
         .status(HttpStatus.OK)
         .json(new SuccessResponse(temporaryResidenceList));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
const createTemporaryResidence = async (req, res) => {
   try {
      const newRow = await temporaryResidenceService.createTemporaryResidence(
         req.body
      );
      if (newRow) {
         let newTemporaryResidence =
            await temporaryResidenceService.getTemporaryResidenceById(
               newRow.id
            );
         return res
            .status(HttpStatus.OK)
            .json(new SuccessResponse(newTemporaryResidence));
      }
      return res
         .status(HttpStatus.BAD_REQUEST)
         .json(new ErrorResponse(HttpStatus.BAD_REQUEST, "create failed"));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};

export { getTemporaryResidenceList, createTemporaryResidence };
