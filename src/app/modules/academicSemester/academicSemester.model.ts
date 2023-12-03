import { Schema, model } from 'mongoose';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterName,
} from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: academicSemesterName,
      required: true,
    },
    year: {
      type: Date,
      default: Date.now,
      required: true,
    },
    code: {
      type: String,
      enum: academicSemesterCode,
      required: true,
    },
    startMonth: {
      type: String,
      enum: academicSemesterMonth,
      required: true,
    },
    endMonth: {
      type: String,
      enum: academicSemesterMonth,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// middleware hook

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error(`this ${this.name} semester already created ${this.year}`);
  }
  next();
});

export const AcademicSemesterModel = model(
  'AcademicSemesters',
  academicSemesterSchema,
);
