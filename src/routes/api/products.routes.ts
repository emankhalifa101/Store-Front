import { Router } from "express";
import authValidationHandler from "../../middleware/auth.middleware";
import * as controller from '../../controller/products.controller';

const routes = Router();

routes.post('/add',controller.createProduct);

routes.get('/',controller.showAllPRoducts);

routes.get('/:id',authValidationHandler,controller.showProduct);

export default routes;