import { NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';

// handling catchAsync HOC
const catchAsync = (asyncFc: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(asyncFc(req, res, next)).catch((err) => next(err));
  };
};

const getStudents = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudentsToDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'students data get successfully!',
    data: result,
  });
});

const getStudent = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await StudentServices.getSingleStudentToDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'signle student get successfully!',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res, next) => {
  const studentId = req.params.id;
  const result = await StudentServices.deletedSingleStudentToDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully!',
    data: result,
  });
});

const changeStatus = catchAsync(async (req, res, next) => {
  const updaterId = req.params.id;
  const result = await StudentServices.changeStatusToDB(updaterId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'status updated successfully!',
    data: result,
  });
});

//---------------Exproter----------!>
export const StudentControllers = {
  getStudents,
  getStudent,
  deleteStudent,
  changeStatus,
};
