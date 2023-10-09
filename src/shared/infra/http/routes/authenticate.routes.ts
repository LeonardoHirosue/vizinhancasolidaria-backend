import { Router } from "express";

import { AuthenticateUserController } from "@modules/accounts/UseCases/authenticateUser/AuthenticateUserController";
import { RefreshTokenController } from "@modules/accounts/UseCases/refreshToken/RefreshTokenController";
import { CheckAuthController } from "@modules/accounts/UseCases/checkAuth/CheckAuthController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();
const checkAuthController = new CheckAuthController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);
authenticateRoutes.get("/me", ensureAuthenticate, checkAuthController.handle);

export { authenticateRoutes }