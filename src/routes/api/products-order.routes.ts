import { Router } from "express";
import authValidationHandler from "../../middleware/auth.middleware";
import * as controller from '../../controller/products-order.controller';

const routes = Router();

routes.post('/',authValidationHandler,controller.create);
routes.get('/:order_id',authValidationHandler ,controller.showAll);

export default routes;