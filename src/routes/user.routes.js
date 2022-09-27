import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUser.controller";

const routes = Router();

routes.post("", createUserController);
routes.get("", listUsersController);

export default routes;
