import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';

const createAcademicSemesterToDB = async (academicData: TAcademicSemester) => {
  const result = await AcademicSemesterModel.create(academicData);
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterToDB,
};
