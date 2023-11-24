import { Router } from "express";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

import { CreateStreetController } from "@modules/streets/UseCases/createStreet/CreateStreetController";
import { ListStreetsController } from "@modules/streets/UseCases/listStreets/ListStreetsController";
import { DeleteStreetController } from "@modules/streets/UseCases/deleteStreet/deleteStreetController";

const streetRoutes = Router();

const createStreetController = new CreateStreetController();
const listStreetController = new ListStreetsController();
const deleteStreetController = new DeleteStreetController();

streetRoutes.post("/", 
    // ensureAuthenticate, 
    // ensureAdmin, 
    createStreetController.handle
);

streetRoutes.get("/", 
    // ensureAuthenticate, 
    listStreetController.handle
);

streetRoutes.delete("/:id", 
    // ensureAuthenticate, 
    // ensureAdmin, 
    deleteStreetController.handle
);

export { streetRoutes }