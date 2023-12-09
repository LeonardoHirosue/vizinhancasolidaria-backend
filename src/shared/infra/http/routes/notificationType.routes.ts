import { Router } from "express";

import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { CreateNotificationTypeController } from "@modules/notificationTypes/UseCases/createNotificationType/CreateNotificationTypeController";
import { DeleteNotificationTypeController } from "@modules/notificationTypes/UseCases/deleteNotificationType/DeleteNotificationTypeController";
import { ListNotificationTypesController } from "@modules/notificationTypes/UseCases/listNotificationTypes/ListNotificationTypesController";

const notificationTypesRoutes = Router();

const createNotificationTypeController = new CreateNotificationTypeController();
const deleteNotificationTypeController = new DeleteNotificationTypeController();
const listNotificationTypesController = new ListNotificationTypesController();

notificationTypesRoutes.post("/", 
    ensureAuthenticate, 
    // ensureAdmin, 
    createNotificationTypeController.handle
);

notificationTypesRoutes.delete("/:id", ensureAuthenticate, ensureAdmin, deleteNotificationTypeController.handle);
notificationTypesRoutes.get("/", 
    ensureAuthenticate, 
    listNotificationTypesController.handle
);

export { notificationTypesRoutes }