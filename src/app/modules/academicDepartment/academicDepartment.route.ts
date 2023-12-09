import express from 'express';
import validateRequest from '../../middlware/validateRequest';
import { AcademicDepartmentControllers } from './academicDepartment.controller';
import {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
} from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(createAcademicDepartmentValidationSchema),
  AcademicDepartmentControllers.createAcademicDepartment,
);

router.get('/', AcademicDepartmentControllers.getAcademicDepartments);

router.get('/:id', AcademicDepartmentControllers.getAcademicDepartment);

router.patch(
  '/:id',
  validateRequest(updateAcademicDepartmentValidationSchema),
  AcademicDepartmentControllers.updateAcademicDepartment,
);

router.delete('/:id', AcademicDepartmentControllers.deleteAcademicDepartment);

export const AcademicDepartmentRoutes = router;
