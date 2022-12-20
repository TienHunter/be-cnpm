import jwt from "jsonwebtoken";
import { HttpStatus } from "../constant.js";
import ErrorResponse from "../utils/ErrorResponse.js";
// const db = require("../../models/index.cjs");

const verifyToken = (req, res, next) => {
   let token;
   if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] == "Bearer"
   ) {
      token = req.headers.authorization.split(" ")[1];
   }
   if (!token) {
      return res.status(403).send({
         message: "Unauthorized!No token provided!You must login",
      });
   }

   jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, authData) => {
      if (err) {
         return res.status(401).send({
            message: "Unauthorized!You don't permission here",
         });
      }

      req.userId = authData.id;
      req.role = authData.role;
      next();
   });
};

const checkUserRole = (userRoles) => {
   return (req, res, next) => {
      if (userRoles.includes(req.role)) {
         return next();
      } else {
         return res
            .status(HttpStatus.UNAUTHORIZED)
            .json(
               new ErrorResponse(
                  HttpStatus.UNAUTHORIZED,
                  "Unauthorized!You don't authorization"
               )
            );
      }
   };
};
export { verifyToken, checkUserRole };
