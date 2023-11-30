/** Import start here 🏃‍♂️ */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandling from './app/middlware/globalErrorHandler';
import notFound from './app/middlware/notFound';
import router from './app/routes';

const app: Application = express();

/** parser 📦 */
app.use(express.json());
app.use(cors());

/** application routers start here 🏃‍♂️ */
app.use('/api/v1', router);
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
