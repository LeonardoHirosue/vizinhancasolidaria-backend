import { Router } from "express";

const informativeRoutes = Router();

import { CreateInformativeController } from "@modules/informative/UseCases/createInformative/CreateInformativeController";

const createInformativeController = new CreateInformativeController();

informativeRoutes.post("/", createInformativeController.handle);

export { informativeRoutes }