import { Router } from "express";
import authValidationHandler from "../../middleware/auth.middleware";
import * as controller from '../../controller/order.controller';

const routes = Router();

routes.post('/',authValidationHandler,controller.createOrder);
routes.get('/',authValidationHandler,controller.showOrders);
routes.get('/:user_id',authValidationHandler,controller.showOrder);

export default routes;