import { Router } from "express";

import { CreateResidenceController } from "@modules/residences/UseCases/createResidence/CreateResidenceController";
import { ListResidencesController } from "@modules/residences/UseCases/listResidences/ListResidencesController";

const residenceRoutes = Router();

const createResidenceController = new CreateResidenceController();
const listResidenceController = new ListResidencesController();

residenceRoutes.post("/", createResidenceController.handle);
residenceRoutes.get("/", listResidenceController.handle)

export { residenceRoutes }