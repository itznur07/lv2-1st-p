import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentToDB = async (student: Student) => {
  const result = await StudentModel.create(student);
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
