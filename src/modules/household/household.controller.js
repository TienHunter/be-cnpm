import { HttpStatus, UserRole } from "../../constant.js";
import ErrorResponse from "../../utils/ErrorResponse.js";
import SuccessResponse from "../../utils/SuccessResponse.js";
import * as householdService from "./household.service.js";

const getAllHouseholds = async (req, res) => {
   try {
      const households = await householdService.getAllHouseholds();
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
const updateHouseholdByID = async (req, res) => {
   try {
      const rowAffect = await householdService.updateHouseholdByID(
         req.params.householdID,
         req.body
      );
      if (rowAffect > 0)
         return res.status(HttpStatus.OK).json(new SuccessResponse(rowAffect));
      else
         return res
            .status(HttpStatus.BAD_REQUEST)
            .json(new ErrorResponse(HttpStatus.BAD_REQUEST, "Not found"));
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
      let checkExist = await householdService.getHouseholdByHouseholdCode(
         req.body.householdCode
      );
      if (checkExist) {
         return res
            .status(HttpStatus.ITEM_ALREADY_EXIST)
            .json(
               new ErrorResponse(
                  HttpStatus.ITEM_ALREADY_EXIST,
                  "duplicate household code"
               )
            );
      }
      let household = await householdService.createHousehold(req.body);
      if (household) {
         return res.status(HttpStatus.OK).json(new SuccessResponse(household));
      } else {
         return res
            .status(HttpStatus.BAD_REQUEST)
            .json(new ErrorResponse(HttpStatus.BAD_REQUEST, "Not found"));
      }
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
      await householdService.deleteHouseholdByID(req.params.householdID);
      return res.status(HttpStatus.OK).json(new SuccessResponse("OK"));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
const getHouseholdsByFilter = async (req, res) => {
   try {
      let { pageSize, pageNumber, keyword } = req.query;
      let households = await householdService.getHouseholdsByFilter(
         pageSize,
         pageNumber,
         keyword
      );
      return res.status(HttpStatus.OK).json(new SuccessResponse(households));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
export {
   getAllHouseholds,
   getHouseholdByID,
   updateHouseholdByID,
   createHousehold,
   deleteHouseholdByID,
   getHouseholdsByFilter,
};
