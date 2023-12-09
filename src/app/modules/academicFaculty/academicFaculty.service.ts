import { TAcademciFaculty } from './academicFaculty.interface';
import { academicFacultyModel } from './academicFacultyModel';

const createAcademicFacultyToDB = async (name: string) => {
  const result = await academicFacultyModel.create(name);
  return result;
};

const getAcademicFacultiesToDB = async () => {
  const result = await academicFacultyModel.find();
  return result;
};

const getAcademicFacultyToDB = async (id: number | string) => {
  const result = await academicFacultyModel.findById(id);
  return result;
};

const updateAcademicFaculty = async (
  id: string | number,
  updatedData: TAcademciFaculty,
) => {
  const result = await academicFacultyModel.findOneAndUpdate(
    { _id: id },
    updatedData,
    { new: true },
  );
  return result;
};

const deleteAcademicFaculty = async (id: number | string) => {
  const result = await academicFacultyModel.deleteOne({ _id: id });
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyToDB,
  getAcademicFacultiesToDB,
  getAcademicFacultyToDB,
  updateAcademicFaculty,
  deleteAcademicFaculty,
};
