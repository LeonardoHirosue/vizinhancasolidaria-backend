import { Router } from "express";

import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

import { CreateNotificationController } from "@modules/notifications/UseCases/createNotification/CreateNotificationController";
import { ListUserNotificationsController } from "@modules/notifications/UseCases/listNotifications/ListUserNotificationsController";
import { UpdateNotificationController } from "@modules/notifications/UseCases/updateNotification/UpdateNotificationController";
import { DeleteNotificationController } from "@modules/notifications/UseCases/deleteNotification/DeleteNotificationController";

const notificationsRoutes = Router();

const createNotificationController = new CreateNotificationController();
const listUserNotificationsController = new  ListUserNotificationsController();
const updateNotificationController = new UpdateNotificationController();
const deleteNotificationController = new DeleteNotificationController();

notificationsRoutes.post("/", ensureAuthenticate, createNotificationController.handle);
notificationsRoutes.get("/", ensureAuthenticate, listUserNotificationsController.handle);
notificationsRoutes.patch("/", ensureAuthenticate, updateNotificationController.handle);
notificationsRoutes.delete("/:id", ensureAuthenticate, deleteNotificationController.handle);

export { notificationsRoutes }