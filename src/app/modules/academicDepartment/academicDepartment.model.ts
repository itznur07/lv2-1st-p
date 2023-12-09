import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';

const academicDepartmentSchema = new Schema<TAcademicDepartment>({
  name: {
    type: String,
    required: [true, 'academic department name is required'],
    unique: true,
  },

  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref: 'academicFacultyModel',
    required: true,
  },
});

export const academicDepartmentModel = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
