import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response, 
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    return response.status(401).json({
      message: "Token missing!"
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "b2dfd307fb6e9f375379b8062749e7c1") as IPayload;

    request.id = sub;

    next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token!"
    });
  }
}