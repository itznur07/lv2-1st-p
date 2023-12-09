import { z } from 'zod';

const AcademicFacultyValidationSchema = z.object({
  name: z.string({ invalid_type_error: 'academic faculty must be required!' }),
});

export const academicFacultyValidation = {
  AcademicFacultyValidationSchema,
};
