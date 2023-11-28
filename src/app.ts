/** Import start here 🏃‍♂️ */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRouters } from './modules/student/student.route';
const app: Application = express();

/** parser 📦 */
app.use(express.json());
app.use(cors());

/** application routers start here 🏃‍♂️ */
app.use('/api/v1/students', StudentRouters);
app.use('/api/v1/', StudentRouters);
app.use('/api/v1/:id', StudentRouters);
app.use('/api/v1/:deletedId', StudentRouters);
app.use('/api/v1/changeStatus/:id', StudentRouters);

/** application routers ends here ⏱️ */

/** APIs start here 🏃‍♂️ */
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});
/** APIs ends here ⏱️ */

/** Exporter */
export default app;
