import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { StudentRouters } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/uesr.route';

const router = express.Router();

const moduleRouter = [
  {
    path: '/students',
    route: StudentRouters,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
