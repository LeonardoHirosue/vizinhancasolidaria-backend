import { Router } from "express";

const informativeRoutes = Router();

import { CreateInformativeController } from "@modules/informative/UseCases/createInformative/CreateInformativeController";
import { ListInformativeController } from "@modules/informative/UseCases/listInformative/ListInformativeController";
import { DeleteInformativeController } from "@modules/informative/UseCases/deleteInformative/DeleteInformativeController";

const createInformativeController = new CreateInformativeController();
const listInformativeController = new ListInformativeController();
const deleteInformativeController = new DeleteInformativeController();

informativeRoutes.post("/", createInformativeController.handle);
informativeRoutes.get("/", listInformativeController.handle);
informativeRoutes.delete("/:id", deleteInformativeController.handle);

export { informativeRoutes }