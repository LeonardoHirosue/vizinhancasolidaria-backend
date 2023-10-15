import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./user.routes";
import { notificationsRoutes } from "./notification.routes";
import { notificationTypesRoutes } from "./notificationType.routes";
import { streetRoutes } from "./street.routes";
import { groupsRoutes } from "./group.routes";
import { groupStreetRoutes } from "./groupStreet.routes";
import { residenceRoutes } from "./residence.routes";
import { userResidenceRoutes } from "./userResidence.routes";
import { carRoutes } from "./car.routes";
import { petRoutes } from "./pet.routes";
import { informativeRoutes } from "./informative.routes";

const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes);
router.use("/notifications", notificationsRoutes);
router.use("/notifications/types", notificationTypesRoutes);
router.use("/streets", streetRoutes);
router.use("/groups", groupsRoutes);
router.use("/groups-streets", groupStreetRoutes);
router.use("/residences", residenceRoutes);
router.use("/users-residences", userResidenceRoutes);
router.use("/cars", carRoutes);
router.use("/pets", petRoutes);
router.use("/informatives", informativeRoutes)

export { router }
