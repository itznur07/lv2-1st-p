import express, { Router } from 'express';
import { StudentControllers } from './student.controller';

const router: Router = express.Router();

router.get('/', StudentControllers.getAllStudents);
router.get('/:id', StudentControllers.getSignleStudent);
router.patch('/changeStatus/:id', StudentControllers.changeStatus);
router.delete('/:deletedId', StudentControllers.deletedSingleStudent);

export const StudentRouters = router;
