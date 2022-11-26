declare namespace Express {
  interface Request {
    authorizedUser: {
      _id: string;
      role?: string;
    };
  }
}
