import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload"
import { CreatePetController } from "@modules/pets/UseCases/createPet/CreatePetController";
import { DeletePetController } from "@modules/pets/UseCases/deletePet/DeletePetController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const petRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createPetController = new CreatePetController();
const deletePetController = new DeletePetController();

petRoutes.post("/", ensureAuthenticate, uploadAvatar.single("url_image"), createPetController.handle);
petRoutes.delete("/:id", ensureAuthenticate, deletePetController.handle)

export { petRoutes }
