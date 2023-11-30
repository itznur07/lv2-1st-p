/** Import start here 🏃‍♂️ */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandling from './app/middlware/globalErrorHandler';
import notFound from './app/middlware/notFound';
import { StudentRouters } from './modules/student/student.route';
import { UserRoutes } from './modules/user/uesr.route';
const app: Application = express();

/** parser 📦 */
app.use(express.json());
app.use(cors());

/** application routers start here 🏃‍♂️ */
app.use('/api/v1/user', UserRoutes);
app.use('/api/v1/student', StudentRouters);
/** application routers ends here ⏱️ */

/** APIs start here 🏃‍♂️ */
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});
/** APIs ends here ⏱️ */

/** globalErrorHandling Middleware start here 🏃‍♂️ */

app.use(globalErrorHandling);
app.use(notFound);

/** Exporter */
export default app;
