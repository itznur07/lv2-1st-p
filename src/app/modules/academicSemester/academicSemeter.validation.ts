import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterName,
} from './academicSemester.constant';

const academicSemesterValidateSchema = z.object({
  body: z.object({
    name: z.enum([...academicSemesterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...academicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...academicSemesterMonth] as [string, ...string[]]),
    endMonth: z.enum([...academicSemesterMonth] as [string, ...string[]]),
  }),
});

export const academicSemesterValidateSchemas = {
  academicSemesterValidateSchema,
};
