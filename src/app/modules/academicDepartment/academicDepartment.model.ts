import { Schema, model } from 'mongoose';
import AppError from '../../errors/AppError';
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
  },
});

academicDepartmentSchema.pre('save', async function (next) {
  const isExistsDepartment = await academicDepartmentModel.findOne({
    name: this.name,
  });

  if (isExistsDepartment) {
    throw new Error('This academic department is already exists!');
  }

  next();
});

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();

  const isDepartmentExists = await academicDepartmentModel.findOne(query);

  if (!isDepartmentExists) {
    throw new AppError(404, 'department is does not exits');
  }

  next();
});

export const academicDepartmentModel = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
