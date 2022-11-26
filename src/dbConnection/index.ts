import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongoString: string = process.env.DATABASE_URL || "";

const connect = () => {
  mongoose.connect(mongoString);
  const database = mongoose.connection;

  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });
};

export default connect;
