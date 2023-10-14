import { Router } from "express";

import { CreatePetController } from "@modules/pets/UseCases/createPet/CreatePetController";

const petRoutes = Router();

const createPetController = new CreatePetController();

petRoutes.post("/", createPetController.handle);

export { petRoutes }
