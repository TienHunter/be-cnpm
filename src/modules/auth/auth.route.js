import { Router } from "express";
import validate from "../../middlewares/validate.js";
import * as authValidator from "./auth.validator.js";
import * as authController from "./auth.controller.js";
const router = Router();

router.post("/login", validate(authValidator.login), authController.login);

export default router;
