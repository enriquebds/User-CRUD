import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUser.controller";
import listUserByIdController from "../controllers/listUserById.controller";
import updatedUserController from "../controllers/updateUser.controller";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";

const routes = Router();

routes.post("", createUserController);
routes.get("", verifyAuthToken, listUsersController);
routes.get("/:uuid", verifyAuthToken, listUserByIdController);
routes.put("/:id", verifyAuthToken, updatedUserController);
routes.delete("/:id", verifyAuthToken, deleteUserController);

export default routes;
