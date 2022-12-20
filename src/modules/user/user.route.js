import { Router } from "express";
import { HttpStatus, UserRole } from "../../constant.js";
import validate from "../../middlewares/validate.js";
import * as userValidator from "./user.validator.js";
import * as userController from "./user.controller.js";
import { verifyToken, checkUserRole } from "../../middlewares/authJwt.js";
const router = Router();

router.get(
   "/",
   [verifyToken, checkUserRole(UserRole.ADMIN)],
   userController.getAllAccount
);

export default router;
