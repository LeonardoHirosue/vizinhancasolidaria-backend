import { Router } from "express";

import { CreateCarController } from "@modules/cars/UseCases/createCar/CreateCarController";
import { DeleteCarController } from "@modules/cars/UseCases/deleteCar/DeleteCarController";

const carRoutes = Router();

const createCarController = new CreateCarController();
const deleteCarController = new DeleteCarController();

carRoutes.post("/", createCarController.handle);
carRoutes.delete("/:id", deleteCarController.handle);

export { carRoutes }

