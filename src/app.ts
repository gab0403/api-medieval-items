import express from 'express';
import 'express-async-errors';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';
import ordersRoutes from './routes/orders.routes';
import loginRoutes from './routes/login.routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/', productsRoutes);
app.use('/', usersRoutes);
app.use('/', ordersRoutes);
app.use('/', loginRoutes);

app.use(errorMiddleware);
export default app;
