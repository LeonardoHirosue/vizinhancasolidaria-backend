import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./user.routes";
import { notificationsRoutes } from "./notification.routes";
import { notificationTypesRoutes } from "./notificationType.routes";
import { streetRoutes } from "./street.routes";
import { groupsRoutes } from "./group.routes";


const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes);
router.use("/notifications", notificationsRoutes);
router.use("/notifications/types", notificationTypesRoutes);
router.use("/streets", streetRoutes);
router.use("/groups", groupsRoutes)

export { router }
