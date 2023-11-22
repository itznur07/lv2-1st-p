import { Request, Response } from 'express';
import { Student } from './student.interface';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student: Student = req.body;
    const result = await StudentServices.createStudentToDB(student);

    res.status(200).json({
      success: true,
      message: 'student created succssfully!',
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsToDB();

    res.status(200).json({
      success: true,
      message: 'students data get successfully!',
      data: result,
    });
  } catch (error) {
    console.error(error);
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
    console.error(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSignleStudent,
};
