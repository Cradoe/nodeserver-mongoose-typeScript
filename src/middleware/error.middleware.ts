import { Request, Response } from "express";

export const errorMiddleware = (error: any, _req: Request, res: Response) => {
  let { status = 500, message, data } = error;

  console.log(`[Error] ${error}`);

  // If status code is 500 - change the message to Internal server error
  console.log(error);
  message = status === 500 || !message ? "Internal server error" : message;

  error = {
    type: "error",
    status,
    message,
    ...(data && data),
  };

  res.status(status).send(error);
};
