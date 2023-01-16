import { NextFunction, Request, Response } from 'express';
import Error from '../interfaces/error.interface';

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || 'sorry some thing went wrong try again';
  res.status(status).json({ status, message });
};

export default errorHandler;
