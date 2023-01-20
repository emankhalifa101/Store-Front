import { Router } from "express";
import authValidationHandler from "../../middleware/auth.middleware";
import * as controller from '../../controller/users.controller';

const routes = Router();

routes.get('/',authValidationHandler ,controller.getAllUsers);

routes.get('/:id',authValidationHandler,controller.getUser);

routes.post('/',authValidationHandler ,controller.createUser);

routes.put('/',authValidationHandler,controller.updateUser);

routes.delete('/:id',authValidationHandler,controller.deleteUser);

routes.post('/authenticate', controller.authenticateUser)

export default routes;