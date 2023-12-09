import { string, z } from 'zod';

// zod validation for create academic department

export const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: string({
      invalid_type_error: 'academic department name is must be string',
    }),

    academicFaculty: string(),
  }),
});

//zod validation for update academic department

export const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: string({
      invalid_type_error: 'academic department name is must be string',
    }).optional(),

    academicFaculty: string().optional(),
  }),
});
