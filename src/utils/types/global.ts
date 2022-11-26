import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import HttpException from "../HttpException.utils";

export interface IMiddlewareFunction {
  (req: Request, res: Response, next: NextFunction): Promise<
    void | Response | HttpException
  >;
}

export interface IExample extends mongoose.Document {
  _id: string;
  test: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
