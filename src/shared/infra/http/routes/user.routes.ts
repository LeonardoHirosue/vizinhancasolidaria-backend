import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload"
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { CreateUserController } from "@modules/accounts/UseCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/UseCases/updateUserAvatar/UpdateUserAvatarController";
import { ListUsersController } from "@modules/accounts/UseCases/listUsers/ListUsersController";
import { UserInfoController } from "@modules/accounts/UseCases/userInfo/UserInfoController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const listUsersController = new ListUsersController();
const userInforController = new UserInfoController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.get("/:id", userInforController.handle);

usersRoutes.patch(
    "/avatar",
    ensureAuthenticate, 
    uploadAvatar.single("avatar"), 
    updateUserAvatarController.handle
);

export { usersRoutes }