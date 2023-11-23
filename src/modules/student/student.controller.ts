import { Request, Response } from 'express';
import { Student } from './student.interface';
import { StudentServices } from './student.service';
import { studentValidationSchema } from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    // get data from user/body
    const student: Student = req.body;

    // custom data validation using zod
    const zodValidateData = studentValidationSchema.parse(student);

    // send result into createStudentToDB function // services.ts file
    const result = await StudentServices.createStudentToDB(zodValidateData);

    // give success response
    res.status(200).json({
      success: true,
      message: 'student created succssfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong!',
      error: error,
    });
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

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSignleStudent,
  deletedSingleStudent,
};
