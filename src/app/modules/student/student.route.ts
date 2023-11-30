import express, { Router } from 'express';
import { StudentControllers } from './student.controller';

const router: Router = express.Router();

router.get('/', StudentControllers.getStudents);
router.get('/:id', StudentControllers.getStudent);
router.patch('/changeStatus/:id', StudentControllers.changeStatus);
router.delete('/:deletedId', StudentControllers.deleteStudent);

export const StudentRouters = router;
