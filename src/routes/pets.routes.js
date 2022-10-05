import { Router } from "express";
import createPetController from "../controllers/createPet.controller";
import listUsersPetsController from "../controllers/listUsersPets.controller";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";

const routes = Router();

routes.post("/:ownder_id/new", verifyAuthToken, createPetController);
routes.get("/:ownder_id", verifyAuthToken, listUsersPetsController);

export default routes;
