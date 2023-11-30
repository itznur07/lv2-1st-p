import express from 'express';
import validateRequest from '../../middlware/validateRequest';
import { studentValidations } from '../student/student.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.studentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
