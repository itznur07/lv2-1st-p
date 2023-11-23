import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentToDB = async (studentData: Student) => {
  // const result = await StudentModel.create(student); // built in static method

  const student = new StudentModel(studentData);
  const result = await student.save(); // built in instance method

  return result;
};

const getAllStudentsToDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentToDB = async (id: string) => {
  const result = await StudentModel.findOne({ id: id });
  return result;
};

/** Exporter 📤 */
export const StudentServices = {
  createStudentToDB,
  getAllStudentsToDB,
  getSingleStudentToDB,
};
