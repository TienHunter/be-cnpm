import { Router } from "express";
import { HttpStatus, UserRole } from "../../constant.js";
import validate from "../../middlewares/validate.js";
import * as residentValidator from "./resident.validator.js";
import * as residentController from "./resident.controller.js";
import { verifyToken, checkUserRole } from "../../middlewares/authJwt.js";
const router = Router();

router.get("/", [verifyToken], residentController.getAllResident);
router.get(
   "/:householdCode/household",
   [verifyToken],
   validate(residentValidator.getResidentByHouseholdCode),
   residentController.getResidentByHouseholdCode
);
router.delete(
   "/:residentID",
   [verifyToken, checkUserRole([UserRole.PRESIDENT, UserRole.VICEPRESIDENT])],
   validate(residentValidator.getResidentByID),
   residentController.deleteResidentByID
);
router.get(
   "/:residentID",
   verifyToken,
   validate(residentValidator.getResidentByID),
   residentController.getResidentByID
);
router.post(
   "/:householdCode/create",
   [verifyToken, checkUserRole([UserRole.PRESIDENT, UserRole.VICEPRESIDENT])],
   validate(residentValidator.createResident),
   residentController.createResident
);
router.post(
   "/update",
   [verifyToken, checkUserRole([UserRole.PRESIDENT, UserRole.VICEPRESIDENT])],
   validate(residentValidator.updateResident),
   residentController.updateResidentByID
);
export default router;
