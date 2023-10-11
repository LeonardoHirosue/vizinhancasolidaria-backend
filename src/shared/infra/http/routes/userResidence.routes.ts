import { Router } from "express";

import { CreateUserResidenceController } from "@modules/usersResidences/UseCases/createUserResidence/CreateUserResidenceController";

const userResidenceRoutes = Router();

const createUserResidenceController = new CreateUserResidenceController();

userResidenceRoutes.post("/", createUserResidenceController.handle)

export { userResidenceRoutes }