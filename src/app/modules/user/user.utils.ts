// year semesterCode 4digit number
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';

// const findLastStudentId = async () => {
//   const lastStudent = await UserModel.findOne(
//     {
//       role: 'student',
//     },
//     {
//       id: 1,
//       _id: 0,
//     },
//   )
//     .sort({
//       createdAt: -1,
//     })
//     .lean();

//   return lastStudent?.id ? lastStudent.id : undefined;
// };

export const generateStudentId = async (payload: TAcademicSemester) => {
  let currentId = (0).toString(); // 0000 by deafult

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};
