import { NextFunction, Request, Response } from 'express';
import HttpException from '../../validations/httpExeption';

const httpError = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
  next();
};
export default httpError;