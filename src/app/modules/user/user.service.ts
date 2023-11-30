import config from '../../config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentToDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);

  userData.role = 'student';

  userData.id = '30102000';

  const newUser = await UserModel.create(userData);

  // create student

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await StudentModel.create(studentData);

    return newStudent;
  }
};

export const UserServices = {
  createStudentToDB,
};
