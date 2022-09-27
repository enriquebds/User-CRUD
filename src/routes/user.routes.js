import { Router } from "express";
import createUserController from "../controllers/createUser.controller";

const routes = Router()

routes.post("", createUserController)

export default routes