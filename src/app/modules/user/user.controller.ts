import { NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

//handling catchAsync HOC
const catchAsync = (asyncFc: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(asyncFc(req, res, next)).catch((err) => next(err));
  };
};

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student } = req.body;
  const result = await UserServices.createStudentToDB(password, student);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully!',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
