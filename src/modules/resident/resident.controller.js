import { HttpStatus, UserRole } from "../../constant.js";
import ErrorResponse from "../../utils/ErrorResponse.js";
import SuccessResponse from "../../utils/SuccessResponse.js";
import * as residentService from "./resident.service.js";
import { getHouseholdByHouseholdCode } from "../household/household.service.js";
const getAllResident = async (req, res) => {
   try {
      const resident = await residentService.getAllResident();
      return res.status(HttpStatus.OK).json(new SuccessResponse(resident));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
const getResidentByHouseholdCode = async (req, res) => {
   try {
      const resident = await residentService.getResidentByHouseholdCode(
         req.params.householdCode
      );
      return res.status(HttpStatus.OK).json(new SuccessResponse(resident));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
const createResident = async (req, res) => {
   try {
      let household = await getHouseholdByHouseholdCode(
         req.params.householdCode
      );
      if (!household) {
         return res
            .status(HttpStatus.NOT_FOUND)
            .json(new ErrorResponse(HttpStatus.NOT_FOUND, "Not found"));
      }
      req.body.householdCode = req.params.householdCode;
      let person = await residentService.createResident(req.body);
      return res.status(HttpStatus.OK).json(new SuccessResponse(person));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
const deleteResidentByID = async (req, res) => {
   try {
      let rowAffected = await residentService.deleteResidentByID(
         req.params.residentID
      );
      if (rowAffected > 0)
         return res.status(HttpStatus.OK).json(new SuccessResponse("OK"));
      else
         return res
            .status(HttpStatus.NOT_FOUND)
            .json(new ErrorResponse(HttpStatus.NOT_FOUND, "Not found"));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
const getResidentByID = async (req, res) => {
   try {
      const resident = await residentService.getResidentByID(
         req.params.residentID
      );
      if (res)
         return res.status(HttpStatus.OK).json(new SuccessResponse(resident));
      else
         return res
            .status(HttpStatus.ITEM_NOT_FOUND)
            .json(new ErrorResponse(HttpStatus.ITEM_NOT_FOUND, "Not found"));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
const updateResidentByID = async (req, res) => {
   try {
      // kiểm tra xem tồn tại household đó không
      let household = await getHouseholdByHouseholdCode(req.body.householdCode);

      // kiểm tra xem tồn tại resident đó không
      let resident = await residentService.getResidentByID(req.body.id);
      if (!household || !resident) {
         return res
            .status(HttpStatus.NOT_FOUND)
            .json(new ErrorResponse(HttpStatus.NOT_FOUND, "Not found"));
      }
      let rowAffected = await residentService.updateResidentByID(req.body);
      if (rowAffected > 0) {
         return res
            .status(HttpStatus.OK)
            .json(new SuccessResponse(rowAffected));
      } else {
         return res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .json(
               new ErrorResponse(
                  HttpStatus.INTERNAL_SERVER_ERROR,
                  "upđate failed"
               )
            );
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
   getAllResident,
   createResident,
   getResidentByHouseholdCode,
   deleteResidentByID,
   getResidentByID,
   updateResidentByID,
};
