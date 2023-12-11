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

academicFacultySchema.pre('save', async function (next) {
  const isExistsFaculty = await academicFacultyModel.findOne({
    name: this.name,
  });

  if (isExistsFaculty) {
    throw new Error('This academic faculty is already exists!');
  }

  next();
});

academicFacultySchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();

  const isExistsFaculty = await academicFacultyModel.findOne(query);

  if (!isExistsFaculty) {
    throw new Error('This academic faculty does not exists!');
  }

  next();
});

export const academicFacultyModel = model<TAcademciFaculty>(
  'AcademicFaculty',
  academicFacultySchema,
);
