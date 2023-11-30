import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsToDB();

    res.status(200).json({
      success: true,
      message: 'students data get successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSignleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await StudentServices.getSingleStudentToDB(id);

    res.status(200).json({
      success: true,
      message: 'signle student get successfully!',
      data: result,
    });
  } catch (error) {
    next(error); // send it globalErrorHandling Middleware function
  }
};

const deletedSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId = req.params.id;

    const result = await StudentServices.deletedSingleStudentToDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const changeStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const updaterId = req.params.id;
    const result = await StudentServices.changeStatusToDB(updaterId);

    res.status(200).json({
      success: true,
      message: 'status updated successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSignleStudent,
  deletedSingleStudent,
  changeStatus,
};
