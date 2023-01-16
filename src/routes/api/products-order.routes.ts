import { Router } from "express";
import authValidationHandler from "../../middleware/auth.middleware";
import * as controller from '../../controller/products-order.controller';

const routes = Router();

routes.post('/new',controller.create);
routes.get('/:order_id',controller.showAll);
/*routes.get('/:user_id',controller.showOrder); */

export default routes;