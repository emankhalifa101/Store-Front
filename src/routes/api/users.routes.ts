import { Router } from "express";
import * as controller from '../../controller/users.controller';

const routes = Router();

routes.get('/',controller.getAllUsers);

routes.get('/:id',controller.getUser);

routes.post('/addUser',controller.createUser);

routes.put('/editUser',controller.updateUser);

routes.delete('/deleteUser/:id',controller.deleteUser);

export default routes;