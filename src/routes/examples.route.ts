import express from "express";
import ExampleController from "../controllers/example.controller";
import {
  awaitHandlerFactory,
  newExampleValidationSchema,
  validationHandler,
  authorizationMiddleware,
} from "../middleware";

const router = express.Router();

// Create a new example
router.post(
  "/create-account",
  newExampleValidationSchema,
  validationHandler,
  awaitHandlerFactory(ExampleController.index)
);

//fetch all examples
router.get(
  "/",
  authorizationMiddleware,
  awaitHandlerFactory(ExampleController.index)
);

export default router;
