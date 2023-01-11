import { NextFunction, Request, Response } from 'express';
import Jwt from 'jsonwebtoken';
import config from '../config';
import Error from '../interfaces/error.interface';

const errorHandler = (next: NextFunction) => {
  const error: Error = new Error('Authorization Error please try again');
  error.status = 401;
  next(error);
};

const authValidationHandler = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const auth = req.get('Authorization');
    if (auth) {
      const bearer = auth?.split(' ')[0].toLowerCase();
      const token = auth.split(' ')[1];
      if (token && bearer === 'bearer') {
        const isTokenVerified = Jwt.verify(
          token,
          config.tokenSecret as unknown as string
        );
        isTokenVerified ? next() : errorHandler(next);
      } else {
        errorHandler(next);
      }
    } else {
      errorHandler(next);
    }
  } catch (error) {
    errorHandler(next);
  }
};

export default authValidationHandler;
