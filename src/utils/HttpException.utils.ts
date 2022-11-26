import dotenv from "dotenv";
import { Response } from "express";
import responseCode from "./responseCode.utils";

dotenv.config();

class HttpException {
  status: number;
  message: string;
  error?: string;
  res: Response;

  constructor(res: Response, status: number, message: string, error?: any) {
    this.status = status;
    this.message = message;
    this.res = res;
    this.error = error || "undedined error";
    this.init();
  }
  init = () => {
    if (process.env.ENVIRONMENT === "development") {
      // console.log(this.error);
    }
    this.res
      .status(responseCode.oK)
      .json({
        status: this.status,
        message: this.message,
        success: false,
      })
      .end();
  };
}
export default HttpException;
