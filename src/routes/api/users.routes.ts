import { Router } from "express";
import authValidationHandler from "../../middleware/auth.middleware";
import * as controller from '../../controller/users.controller';

const routes = Router();

routes.get('/',controller.getAllUsers);

routes.get('/:id',authValidationHandler,controller.getUser);

routes.post('/addUser',controller.createUser);

routes.put('/editUser',authValidationHandler,controller.updateUser);

routes.delete('/deleteUser/:id',authValidationHandler,controller.deleteUser);

routes.post('/authenticate', controller.authenticateUser)

export default routes;