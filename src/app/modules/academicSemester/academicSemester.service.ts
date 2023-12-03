import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';

const createAcademicSemesterToDB = async (payload: TAcademicSemester) => {
  // if semester code !== semester name then ki hobe

  type TAcademicSemesterNameCodeMapper = {
    [keys: string]: string;
  };

  const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
    Autumn: '01',
    Summar: '02',
    Fall: '03',
  };

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester code!');
  }

  const result = await AcademicSemesterModel.create(payload);
  return result;
};

const getAcademicSemesterToDB = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterToDB,
  getAcademicSemesterToDB,
};
