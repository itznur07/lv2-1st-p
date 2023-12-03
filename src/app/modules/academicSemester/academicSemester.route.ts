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

router.get('/:semesterId', academicSemesterControllers.getAcademicSemester);

router.patch(
  '/:semesterId',
  validateRequest(
    academicSemesterValidateSchemas.academicSemesterValidateSchema,
  ),
  academicSemesterControllers.updateAcademicSemester,
);

export const AcademicSemesterRoutes = router;
