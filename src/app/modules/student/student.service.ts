import { StudentModel } from './student.model';

const getAllStudentsToDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentToDB = async (id: string) => {
  const result = await StudentModel.findOne({ id: id });
  return result;
};

const deletedSingleStudentToDB = async (studentId: string) => {
  const result = await StudentModel.updateOne(
    { studentId },
    { isDeleted: true },
  );
  return result;
};

const changeStatusToDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isActive: 'ofline' });
  return result;
};

/** Exporter 📤 */
export const StudentServices = {
  getAllStudentsToDB,
  getSingleStudentToDB,
  deletedSingleStudentToDB,
  changeStatusToDB,
};
