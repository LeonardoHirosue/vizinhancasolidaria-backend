import { Router } from "express";

import { CreateCarController } from "@modules/cars/UseCases/createCar/CreateCarController";
import { DeleteCarController } from "@modules/cars/UseCases/deleteCar/DeleteCarController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const carRoutes = Router();

const createCarController = new CreateCarController();
const deleteCarController = new DeleteCarController();

carRoutes.post("/", ensureAuthenticate, createCarController.handle);
carRoutes.delete("/:id", ensureAuthenticate, deleteCarController.handle);

export { carRoutes }

