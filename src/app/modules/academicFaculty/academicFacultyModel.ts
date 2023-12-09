import { Schema, model } from 'mongoose';
import { TAcademciFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<TAcademciFaculty>(
  {
    name: {
      type: String,
      required: [true, 'academic faculty is required'],
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const academicFacultyModel = model<TAcademciFaculty>(
  'AcademicFaculty',
  academicFacultySchema,
);
