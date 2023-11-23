import { z } from 'zod';

const nameValidationSchema = z.object({
  firstName: z.string().min(1).max(8).trim(),
  middleName: z.string().trim().optional(),
  lastName: z.string().min(1).trim(),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1).trim(),
  fatherOce: z.string().trim().optional(),
  fatherContactNo: z.string().min(1).trim(),
});

export const studentValidationSchema = z.object({
  id: z.string().min(1),
  name: nameValidationSchema,
  email: z.string().email(),
  gender: z.enum(['male', 'female']),
  bloodGroups: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  isActive: z.enum(['active', 'ofline']).default('active'),
  contactNo: z.string().min(1).trim(),
  dateOfBirth: z.string().trim().optional(),
  emergencyContactNo: z.string().trim().optional(),
  guardian: guardianValidationSchema,
  parmanentAddress: z.string().min(1).trim(),
  presentAddress: z.string().min(1).trim(),
});
