import { Router } from "express";
import { HttpStatus, UserRole } from "../../constant.js";
import validate from "../../middlewares/validate.js";
import * as temporaryResidenceValidator from "./temporaryResidence.validator.js";
import * as temporaryResidenceController from "./temporaryResidence.controller.js";
import { verifyToken, checkUserRole } from "../../middlewares/authJwt.js";
const router = Router();

router.get(
   "/",
   [
      verifyToken,
      checkUserRole(
         UserRole.PRESIDENT,
         UserRole.VICE_PRESIDENT,
         UserRole.SECRETARY
      ),
   ],
   temporaryResidenceController.getTemporaryResidenceList
);

export default router;
