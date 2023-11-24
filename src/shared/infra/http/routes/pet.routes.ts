import { Router } from "express";

import { CreatePetController } from "@modules/pets/UseCases/createPet/CreatePetController";
import { DeletePetController } from "@modules/pets/UseCases/deletePet/DeletePetController";

const petRoutes = Router();

const createPetController = new CreatePetController();
const deletePetController = new DeletePetController();

petRoutes.post("/", createPetController.handle);
petRoutes.delete("/:id", deletePetController.handle)

export { petRoutes }
