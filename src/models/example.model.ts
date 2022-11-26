import mongoose from "mongoose";
import { IExample } from "@utils/";

const ExampleSchema = new mongoose.Schema({
  test: {
    required: true,
    type: String,
  },
  createdAt: {
    required: true,
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    required: true,
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IExample>("Examples", ExampleSchema);
