import { Router } from "express";
import { HttpStatus, UserRole } from "../../constant.js";
import validate from "../../middlewares/validate.js";
import * as householdValidator from "./household.validator.js";
import * as householdController from "./household.controller.js";
import { verifyToken, checkUserRole } from "../../middlewares/authJwt.js";
const router = Router();
router.put(
   "/:householdID",
   [verifyToken, checkUserRole([UserRole.PRESIDENT, UserRole.VICE_PRESIDENT])],
   validate(householdValidator.updateHouseholdByID),
   householdController.updateHouseholdByID
);

router.get(
   "/:householdID",
   verifyToken,
   validate(householdValidator.getHouseholdByID),
   householdController.getHouseholdByID
);
router.post(
   "/",
   [verifyToken, checkUserRole([UserRole.PRESIDENT, UserRole.VICE_PRESIDENT])],
   validate(householdValidator.createHousehold),
   householdController.createHousehold
);
router.delete(
   "/:householdID",
   [verifyToken, checkUserRole([UserRole.PRESIDENT, UserRole.VICE_PRESIDENT])],
   validate(householdValidator.deleteById),
   householdController.deleteHouseholdByID
);

router.get(
   "/",
   [verifyToken],
   validate(householdValidator.getList),
   householdController.getList
);
export default router;
