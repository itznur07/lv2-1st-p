import express from 'express';
import validateRequest from '../../middlware/validateRequest';
import { AcademicFacultyControllers } from './academicFaculty.controller';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/create-academic-fatulty',
  validateRequest(academicFacultyValidation.AcademicFacultyValidationSchema),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.get('/', AcademicFacultyControllers.getAcademicFaculties);

router.get('/:id', AcademicFacultyControllers.getAcademicFaculty);

router.patch(
  '/:id',
  validateRequest(academicFacultyValidation.AcademicFacultyValidationSchema),
  AcademicFacultyControllers.updateAcademicFaculty,
);

router.delete('/:id', AcademicFacultyControllers.deleteAcademicFaculty);

export const AcademicFacultyRoutes = router;
