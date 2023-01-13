import { Router } from 'express';
import usersRoutes from './api/users.routes';
import productsRoutes from './api/products.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/products', productsRoutes);

export default routes;
