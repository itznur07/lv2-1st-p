import { Schema, model } from 'mongoose';
import validator from 'validator';
import { TStudent } from './student.interface';

const studentSchema = new Schema<TStudent>(
  {
    id: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, ' user Id must be required'],
      unique: true,
      ref: 'UserModel',
    },
    name: {
      firstName: {
        type: String,
        required: [true, 'Name is required!'],
        maxlength: [8, 'Name should be 8 charectar'],
        trim: true,
      },
      middleName: { type: String, trim: true },
      lastName: {
        type: String,
        required: [true, 'Last is required!'],
        trim: true,
        validate: {
          validator: (value: string) => validator.isAlpha(value),
          message: '{VALUE} is not valid',
        },
      },
    },
    email: { type: String, required: true, unique: true, trim: true },

    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        message: '{VALUE} is not acceptable! plz change it male or female',
      },
      required: true,
    },
    bloodGroups: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not accaptable. plz, change it required data',
      },
    },
    isActive: {
      type: String,
      enum: {
        values: ['active', 'ofline'],
        message: '{VALUE} is not acceptable. plz change it active or ofline',
      },
      default: 'active',
      required: true,
    },
    contactNo: {
      type: String,
      required: [true, 'Contact is required!'],
      trim: true,
    },
    dateOfBirth: { type: String, trim: true },
    emergencyContactNo: { type: String, trim: true },
    guardian: {
      fatherName: {
        type: String,
        required: [true, 'Father name is required!'],
        trim: true,
      },
      fatherOce: { type: String, trim: true },
      fatherContactNo: {
        type: String,
        required: [true, 'Father contact is required!'],
        trim: true,
      },
    },
    parmanentAddress: {
      type: String,
      required: [true, 'Parmanet address is required!'],
      trim: true,
    },
    presentAddress: {
      type: String,
      required: [true, 'present address is required!'],
      trim: true,
    },
    isDeleted: {
      type: Boolean,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// versual magic

studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName}  ${this.name.middleName} ${this.name.lastName}`;
});

studentSchema.pre('find', async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const StudentModel = model<TStudent>('Students', studentSchema);
