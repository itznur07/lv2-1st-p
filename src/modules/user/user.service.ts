import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserToDB = async (userInfo: TUser) => {
  const result = await UserModel.create(userInfo);
  return result;
};

export const UserService = {
  createUserToDB,
};
