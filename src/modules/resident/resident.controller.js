import { HttpStatus, UserRole } from "../../constant.js";
import ErrorResponse from "../../utils/ErrorResponse.js";
import SuccessResponse from "../../utils/SuccessResponse.js";
import * as residentService from "./services/resident.service.js";
const getList = async (req, res) => {
   try {
      const resident = await residentService.getList(req.query);
      return res.status(HttpStatus.OK).json(new SuccessResponse(resident));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};
// const getResidentByHouseholdCode = async (req, res) => {
//    try {
//       const resident = await residentService.getResidentByHouseholdCode(
//          req.params.householdCode
//       );
//       return res.status(HttpStatus.OK).json(new SuccessResponse(resident));
//    } catch (error) {
//       return res
//          .status(HttpStatus.INTERNAL_SERVER_ERROR)
//          .json(
//             new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
//          );
//    }
// };
const createResident = async (req, res) => {
   try {
      let resident = await residentService.createResident({
         ...req.body,
         idNguoiTao: req.userId,
         ngayTao: new Date().toString(),
      });
      return res.status(HttpStatus.OK).json(new SuccessResponse(resident));
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
      let resident = await residentService.updateResidentByID(
         req.params.residentID,
         {
            idNguoiXoa: req.userId,
            ngayXoa: new Date().toString(),
         }
      );
      if (resident) {
         let rowAffected = await residentService.deleteResidentByID(
            req.params.residentID
         );
         if (rowAffected > 0)
            return res
               .status(HttpStatus.OK)
               .json(new SuccessResponse(req.params.residentID));
         else
            return res
               .status(HttpStatus.NOT_FOUND)
               .json(new ErrorResponse(HttpStatus.NOT_FOUND, "Not found"));
      }
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
      if (resident)
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
      // kiểm tra xem tồn tại resident đó không
      let resident = await residentService.getResidentByID(
         req.params.residentID
      );
      if (!resident) {
         return res
            .status(HttpStatus.NOT_FOUND)
            .json(new ErrorResponse(HttpStatus.NOT_FOUND, "Not found"));
      }
      let rowAffected = await residentService.updateResidentByID(
         req.params.residentID,
         req.body
      );
      if (rowAffected > 0) {
         let residentUpdate = await residentService.getResidentByID(
            req.params.residentID
         );
         return res
            .status(HttpStatus.OK)
            .json(new SuccessResponse(residentUpdate));
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
   createResident,
   // getResidentByHouseholdCode,
   deleteResidentByID,
   getResidentByID,
   updateResidentByID,
   getList,
};
