import { Router } from "express";
import authValidationHandler from "../../middleware/auth.middleware";
import * as controller from '../../controller/order.controller';

const routes = Router();

routes.post('/newOrder',controller.createOrder);
routes.get('/',controller.showOrders);
routes.get('/:user_id',controller.showOrder);

export default routes;