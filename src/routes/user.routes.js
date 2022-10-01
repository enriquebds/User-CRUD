import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUser.controller";
import listUserByIdController from "../controllers/listUserById.controller";

const routes = Router();

routes.post("", createUserController);
routes.get("", listUsersController);
routes.get("/:uuid", listUserByIdController);

export default routes;
