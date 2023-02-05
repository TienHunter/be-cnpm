import { Router } from "express";
import { HttpStatus, UserRole } from "../../constant.js";
import validate from "../../middlewares/validate.js";
import * as residentValidator from "./resident.validator.js";
import * as residentController from "./resident.controller.js";
import { verifyToken, checkUserRole } from "../../middlewares/authJwt.js";
const router = Router();

// router.get(
//    "/householdCode/:householdCode",
//    [verifyToken],
//    validate(residentValidator.getResidentByHouseholdCode),
//    residentController.getResidentByHouseholdCode
// );
router.get(
   "/:residentID",
   verifyToken,
   validate(residentValidator.getResidentByID),
   residentController.getResidentByID
);
router.post(
   "/",
   [verifyToken, checkUserRole([UserRole.PRESIDENT, UserRole.VICE_PRESIDENT])],
   validate(residentValidator.createResident),
   residentController.createResident
);
router.delete(
   "/:residentID",
   [verifyToken, checkUserRole([UserRole.PRESIDENT, UserRole.VICE_PRESIDENT])],
   validate(residentValidator.getResidentByID),
   residentController.deleteResidentByID
);

router.put(
   "/:residentID",
   [verifyToken, checkUserRole([UserRole.PRESIDENT, UserRole.VICE_PRESIDENT])],
   validate(residentValidator.updateResident),
   residentController.updateResidentByID
);
router.get(
   "/",
   [verifyToken],
   validate(residentValidator.getList),
   residentController.getList
);
export default router;
