import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterName,
} from './academicSemester.constant';

const academicSemesterValidateSchema = z.object({
  body: z.object({
    name: z.enum([...academicSemesterName] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    code: z.enum([...academicSemesterCode] as [string, ...string[]]).optional(),
    startMonth: z
      .enum([...academicSemesterMonth] as [string, ...string[]])
      .optional(),
    endMonth: z
      .enum([...academicSemesterMonth] as [string, ...string[]])
      .optional(),
  }),
});

export const academicSemesterValidateSchemas = {
  academicSemesterValidateSchema,
};
