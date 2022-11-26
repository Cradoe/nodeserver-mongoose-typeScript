import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validationHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 400,
        message: "Validation error",
        errors: errors.array(),
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};
