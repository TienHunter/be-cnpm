import { Router } from "express";
import { HttpStatus, UserRole } from "../../constant.js";
import validate from "../../middlewares/validate.js";
import * as peopleValidator from "./people.validator.js";
import * as peopleController from "./people.controller.js";
import { verifyToken, checkUserRole } from "../../middlewares/authJwt.js";
const router = Router();

router.get("/", [verifyToken], peopleController.getAllPeople);
// router.get(
//    "/:householdID",
//    verifyToken,
//    validate(householdValidator.getHouseholdByID),
//    householdController.getHouseholdByID
// );

export default router;
