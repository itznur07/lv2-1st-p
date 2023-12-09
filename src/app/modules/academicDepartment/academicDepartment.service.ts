import { TAcademicDepartment } from './academicDepartment.interface';
import { academicDepartmentModel } from './academicDepartment.model';

const createAcademicDepartmentToDB = async (payload: TAcademicDepartment) => {
  const result = await academicDepartmentModel.create(payload);
  return result;
};

const getAcademicDepartmentsToDB = async () => {
  const result = await academicDepartmentModel.find();
  return result;
};

const getAcademicDepartmentToDB = async (id: number | string) => {
  const result = await academicDepartmentModel.findById(id);
  return result;
};

const updateAcademicDepartment = async (
  id: number | string,
  updatedData: TAcademicDepartment,
) => {
  const result = await academicDepartmentModel.findOneAndUpdate(
    { _id: id },
    updatedData,
    { new: true },
  );
  return result;
};

const deleteAcademicDepartment = async (id: number | string) => {
  const result = await academicDepartmentModel.deleteOne({ _id: id });
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentToDB,
  getAcademicDepartmentsToDB,
  getAcademicDepartmentToDB,
  updateAcademicDepartment,
  deleteAcademicDepartment,
};
