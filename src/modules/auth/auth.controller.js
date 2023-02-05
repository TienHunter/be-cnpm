import jwt from "jsonwebtoken";

import { HttpStatus, UserRole } from "../../constant.js";
import { checkHashedString } from "../../middlewares/bcrypt.cjs";
import ErrorResponse from "../../utils/ErrorResponse.js";
import SuccessResponse from "../../utils/SuccessResponse.js";
import * as userService from "../user/services/user.service.js";

const login = async (req, res) => {
   try {
      const { username, password } = req.body;
      const user = await userService.getUserByUsername(username);

      if (!user || !checkHashedString(password, user.password)) {
         return res
            .status(HttpStatus.INVALID_USERNAME_OR_PASSWORD)
            .json(
               new ErrorResponse(
                  HttpStatus.INVALID_USERNAME_OR_PASSWORD,
                  "Invalid username or password"
               )
            );
      }

      let token = jwt.sign(
         { id: user.id, role: user.role },
         process.env.JWT_SECRET_TOKEN,
         {
            expiresIn: 86400, // 24 hours
         }
      );

      delete user.password;
      return res
         .status(HttpStatus.OK)
         .json(new SuccessResponse({ user, token }));
   } catch (error) {
      return res
         .status(HttpStatus.INTERNAL_SERVER_ERROR)
         .json(
            new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message)
         );
   }
};

export { login };
