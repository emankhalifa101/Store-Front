import { Router } from "express";
import authValidationHandler from "../../middleware/auth.middleware";
import * as controller from '../../controller/order.controller';

const routes = Router();

routes.post('/newOrder',controller.createOrder);
routes.get('/',controller.showOrders)

export default routes;