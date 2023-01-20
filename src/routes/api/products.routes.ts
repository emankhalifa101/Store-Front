import { Router } from "express";
import authValidationHandler from "../../middleware/auth.middleware";
import * as controller from '../../controller/products.controller';

const routes = Router();

routes.post('/',authValidationHandler ,controller.createProduct);

routes.get('/',authValidationHandler ,controller.showAllPRoducts);

routes.get('/:id',authValidationHandler ,authValidationHandler,controller.showProduct);

export default routes;