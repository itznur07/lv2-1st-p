import express from 'express';
import validateRequest from '../../middlware/validateRequest';
import { academicSemesterControllers } from './academicSemester.controller';
import { academicSemesterValidateSchemas } from './academicSemeter.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    academicSemesterValidateSchemas.academicSemesterValidateSchema,
  ),
  academicSemesterControllers.createAcademicSemester,
);

router.get('/', academicSemesterControllers.getAcademicSemesters);

export const AcademicSemesterRoutes = router;
