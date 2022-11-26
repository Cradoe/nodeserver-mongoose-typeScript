import express, { Express, Request, Response, urlencoded } from "express";
import dotenv from "dotenv";
import dbConnection from "./dbConnection";

// routes import here
import exampleRoutes from "./routes/examples.route";
import HttpException from "./utils/HttpException.utils";
import { errorMiddleware } from "./middleware";

dotenv.config();
const port = Number(process.env.PORT || 3000);
const serviceName = process.env.SERVICE_NAME || "";
const version = process.env.VERSION;

const app: Express = express();
app.use(express.json());

// allow urlencoded data
app.use(urlencoded({ extended: true }));

app.use(`/${serviceName}/${version}/example`, exampleRoutes);

// 404 error
app.all(`/${serviceName}/*`, (_req: Request, res: Response) => {
  new HttpException(res, 404, "Endpoint Not Found");
});

// Error middleware
app.use(errorMiddleware);

export const start = () => {
  try {
    // starting the server
    app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));

    // connect to db
    dbConnection();
  } catch (e) {
    console.error(e);
  }
};
