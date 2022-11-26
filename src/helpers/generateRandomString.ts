import crypto from "crypto";

export const generateRandomString = (): string => {
  return crypto.randomBytes(20).toString("hex");
};
