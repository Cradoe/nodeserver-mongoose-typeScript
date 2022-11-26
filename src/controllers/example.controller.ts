import { Request, Response } from "express";
import HttpException from "../utils/HttpException.utils";
import responseCode from "../utils/responseCode.utils";
// import ExampleModel from "../models/example.model";

class SellerController {
  /**
   * @description -
   * @param res
   * @returns
   */
  index = async (
    _req: Request,
    res: Response
  ): Promise<Response | HttpException> => {
    try {
      // const examples = await ExampleModel.find();
      // if (!examples.length) {
      //   return new HttpException(
      //     res,
      //     responseCode.notFound,
      //     "Data not found"
      //   );
      // }
      return res.status(responseCode.oK).json({
        status: responseCode.oK,
        success: true,
        message: "Data fetched successfully!",
        data: [],
      });
    } catch (error: Error | any) {
      return new HttpException(
        res,
        responseCode.internalServerError,
        error?.message || "Internal server error",
        error
      );
    }
  };
}

export default new SellerController();
