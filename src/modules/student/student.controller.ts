import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsToDB();

    res.status(200).json({
      success: true,
      message: 'students data get successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSignleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await StudentServices.getSingleStudentToDB(id);

    res.status(200).json({
      success: true,
      message: 'signle student get successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deletedSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;

    const result = await StudentServices.deletedSingleStudentToDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!',
      error: error,
    });
  }
};

const changeStatus = async (req: Request, res: Response) => {
  try {
    const updaterId = req.params.id;
    const result = await StudentServices.changeStatusToDB(updaterId);

    res.status(200).json({
      success: true,
      message: 'status updated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!',
      error: error,
    });
  }
};

export const StudentControllers = {
  getAllStudents,
  getSignleStudent,
  deletedSingleStudent,
  changeStatus,
};
