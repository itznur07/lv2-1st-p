import { NextFunction, Request, RequestHandler, Response } from 'express';

// handling catchAsync HOC
const catchAsync = (asyncFc: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(asyncFc(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsync;
