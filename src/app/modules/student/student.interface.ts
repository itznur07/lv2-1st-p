import { Types } from 'mongoose';

type Guardian = {
  fatherName: string;
  fatherOce?: string;
  fatherContactNo: string;
};

export interface TStudent {
  id: string;
  user: Types.ObjectId;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  password: string;
  contactNo: string;
  emergencyContactNo?: string;
  bloodGroups?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  isActive: 'active' | 'ofline';
  isDeleted: boolean;
  guardian: Guardian;
}
