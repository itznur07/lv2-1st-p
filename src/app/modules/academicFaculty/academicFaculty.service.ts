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
  id: number | string,
  updatedData: TAcademciFaculty,
) => {
  const result = await academicFacultyModel.updateOne({
    _id: id,
    $set: updatedData,
  });
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
