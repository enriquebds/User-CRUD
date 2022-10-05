import { Router } from "express";
import createPetController from "../controllers/createPet.controller";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";

const routes = Router();

routes.post("/:ownder_id/new", verifyAuthToken, createPetController);

export default routes;
