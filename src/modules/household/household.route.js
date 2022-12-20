import { Router } from "express";
import { HttpStatus, UserRole } from "../../constant.js";
import validate from "../../middlewares/validate.js";
import * as householdValidator from "./household.validator.js";
import * as householdController from "./household.controller.js";
import { verifyToken, checkUserRole } from "../../middlewares/authJwt.js";
const router = Router();
router.post(
   "/:householdID/update",
   [verifyToken, checkUserRole([UserRole.PRESIDENT, UserRole.VICEPRESIDENT])],
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
   "/create",
   [verifyToken, checkUserRole([UserRole.PRESIDENT, UserRole.VICEPRESIDENT])],
   validate(householdValidator.createHousehold),
   householdController.createHousehold
);
router.delete(
   "/:householdID",
   verifyToken,
   validate(householdValidator.getHouseholdByID),
   householdController.deleteHouseholdByID
);
router.get("/", [verifyToken], householdController.getAllHouseholds);
export default router;
