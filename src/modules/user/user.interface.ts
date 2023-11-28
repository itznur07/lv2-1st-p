export interface TUser {
  id: string;
  password: string;
  needPasswordChanges: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}
