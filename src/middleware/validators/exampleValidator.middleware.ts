import { body } from "express-validator";

export const newExampleValidationSchema = [
  body("test")
    .exists()
    .withMessage("test is required")
    .isLength({ min: 3 })
    .withMessage("test must be at least 3 chars long"),
];
