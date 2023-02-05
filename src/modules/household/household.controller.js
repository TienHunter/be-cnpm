import { HttpStatus, UserRole } from "../../constant.js";
import ErrorResponse from "../../utils/ErrorResponse.js";
import SuccessResponse from "../../utils/SuccessResponse.js";
import * as householdService from "./household.service.js";
import { getResidentByID } from "../resident/services/resident.service.js";
const getList = async (req, res) => {
   try {
      const households = await householdService.getList(req.query);
      return res.status(HttpStatus.OK).json(new SuccessResponse(households));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
const getHouseholdByID = async (req, res) => {
   try {
      const household = await householdService.getHouseholdByID(
         req.params.householdID
      );
      return res.status(HttpStatus.OK).json(new SuccessResponse(household));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
// const getHouseholdByHouseholdCode = async (req, res) => {
//    try {
//       const household = await householdService.getHouseholdByHouseholdCode(
//          req.params.householdCode
//       );
//       return res.status(HttpStatus.OK).json(new SuccessResponse(household));
//    } catch (error) {
//       return res
//          .status(HttpStatus.INTERNAL_SERVER_ERROR)
//          .json(
//             new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
//          );
//    }
// };
const updateHouseholdByID = async (req, res) => {
   try {
      let checkHouseholder = await getResidentByID(req.body.idChuHo);
      if (checkHouseholder) {
         const rowAffect = await householdService.updateHouseholdByID(
            req.params.householdID,
            req.body
         );
         if (rowAffect > 0) {
            let householdUpdate = await householdService.getHouseholdByID(
               req.params.householdID
            );
            return res
               .status(HttpStatus.OK)
               .json(new SuccessResponse(householdUpdate));
         } else
            return res
               .status(HttpStatus.BAD_REQUEST)
               .json(
                  new ErrorResponse(HttpStatus.BAD_REQUEST, "Update failed")
               );
      }
      return res
         .status(HttpStatus.NOT_FOUND)
         .json(
            new ErrorResponse(HttpStatus.NOT_FOUND, "not found householder")
         );
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
const createHousehold = async (req, res) => {
   try {
      let checkHouseholder = await getResidentByID(req.body.idChuHo);
      if (checkHouseholder) {
         let household = await householdService.createHousehold({
            ...req.body,
            ngayLap: new Date().toString(),
         });
         let newHousehold = await householdService.getHouseholdByID(
            household.id
         );
         return res
            .status(HttpStatus.OK)
            .json(new SuccessResponse(newHousehold));
      }
      return res
         .status(HttpStatus.NOT_FOUND)
         .json(
            new ErrorResponse(HttpStatus.NOT_FOUND, "Not found householder")
         );
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
const deleteHouseholdByID = async (req, res) => {
   try {
      let isDeleted = await householdService.deleteHouseholdByID(
         req.params.householdID
      );
      if (isDeleted > 0) {
         return res
            .status(HttpStatus.OK)
            .json(new SuccessResponse(req.params.householdID));
      } else {
         return res
            .status(HttpStatus.BAD_REQUEST)
            .json(new ErrorResponse(HttpStatus.BAD_REQUEST, "delete failed"));
      }
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
export {
   getList,
   getHouseholdByID,
   updateHouseholdByID,
   createHousehold,
   deleteHouseholdByID,
};
