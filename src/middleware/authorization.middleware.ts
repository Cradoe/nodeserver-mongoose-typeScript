import HttpException from "../utils/HttpException.utils";
import responseCode from "../utils/responseCode.utils";
import { NextFunction, Request, Response } from "express";

/**
 * @description - Authorization middleware for protected routes to check if req.headers.authorization is available and valid
 * @param req - Request object
 * @param res - Response object
 * @param next - Next function
 * @returns - Response object or next function if authorization is valid or not available respectively
 * @throws - HttpException if authorization is invalid or not available respectively
 */
export const authorizationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    // convert to JSON and check if _id and role are available
    const decodedData = JSON.parse(authorization);
    if (decodedData._id && decodedData.role) {
      // if both are valid, call next function
      req.authorizedUser = decodedData;
      return next();
    }
  }
  return new HttpException(
    res,
    responseCode.unauthorized,
    "Access denied! Unauthorized"
  );
};
