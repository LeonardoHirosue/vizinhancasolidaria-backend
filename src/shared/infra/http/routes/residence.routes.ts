import { Router } from "express";

import { CreateResidenceController } from "@modules/residences/UseCases/createResidence/CreateResidenceController";

const residenceRoutes = Router();

const createResidenceController = new CreateResidenceController();

residenceRoutes.post("/", createResidenceController.handle);

export { residenceRoutes }