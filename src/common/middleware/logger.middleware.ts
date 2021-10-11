import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`API :- ${req.url} , Method :- ${req.method} at ${new Date().toISOString()}`);
  next();
}