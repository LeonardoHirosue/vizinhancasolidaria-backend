import { Router } from "express";

import { CreateGroupStreetController } from "@modules/groupsStreets/UseCases/createGroupStreet/CreateGroupStreetController";

const groupStreetRoutes = Router();

const createGroupStreetController = new CreateGroupStreetController();

groupStreetRoutes.post("/", createGroupStreetController.handle);

export { groupStreetRoutes }