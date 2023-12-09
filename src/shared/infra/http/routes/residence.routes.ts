import { Router } from "express";

import { CreateResidenceController } from "@modules/residences/UseCases/createResidence/CreateResidenceController";
import { ListResidencesController } from "@modules/residences/UseCases/listResidences/ListResidencesController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const residenceRoutes = Router();

const createResidenceController = new CreateResidenceController();
const listResidenceController = new ListResidencesController();

residenceRoutes.post("/", ensureAuthenticate, createResidenceController.handle);
residenceRoutes.get("/", ensureAuthenticate, listResidenceController.handle)

export { residenceRoutes }