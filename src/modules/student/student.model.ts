import { Schema, model } from 'mongoose';
import { Student } from './student.interface';

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  bloodGroups: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  contactNo: { type: String, required: true },
  dateOfBirth: { type: String },
  emergencyContactNo: { type: String },
  guardian: {
    fatherName: { type: String, required: true },
    fatherOce: { type: String },
    fatherContactNo: { type: String, required: true },
  },
  parmanentAddress: { type: String, required: true },
  presentAddress: { type: String, required: true },
});

export const StudentModel = model<Student>('Student', studentSchema);
