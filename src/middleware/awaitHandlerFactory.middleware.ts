import { NextFunction, Request, Response } from "express";
import { IMiddlewareFunction } from "@utils/";

export const awaitHandlerFactory = (middleware: IMiddlewareFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
