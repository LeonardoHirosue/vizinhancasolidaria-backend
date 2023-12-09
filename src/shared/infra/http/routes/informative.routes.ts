import { Router } from "express";

const informativeRoutes = Router();

import { CreateInformativeController } from "@modules/informative/UseCases/createInformative/CreateInformativeController";
import { ListInformativeController } from "@modules/informative/UseCases/listInformative/ListInformativeController";
import { DeleteInformativeController } from "@modules/informative/UseCases/deleteInformative/DeleteInformativeController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const createInformativeController = new CreateInformativeController();
const listInformativeController = new ListInformativeController();
const deleteInformativeController = new DeleteInformativeController();

informativeRoutes.post("/", ensureAuthenticate, createInformativeController.handle);
informativeRoutes.get("/", ensureAuthenticate, listInformativeController.handle);
informativeRoutes.delete("/:id",ensureAuthenticate, deleteInformativeController.handle);

export { informativeRoutes }