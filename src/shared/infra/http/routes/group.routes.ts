import { Router } from "express";

import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { CreateGroupController } from "@modules/groups/UseCases/createGroup/CreateGroupController";
import { ListGroupsController } from "@modules/groups/UseCases/listGroup/ListGroupsController";
import { UpdateGroupController } from "@modules/groups/UseCases/updateGroup/UpdateGroupController";
import { DeleteGroupController } from "@modules/groups/UseCases/deleteGroup/DeleteGroupController";

const groupsRoutes = Router();

const createGroupController = new CreateGroupController();
const listGroupsController = new ListGroupsController();
const updateGroupController = new UpdateGroupController();
const deleteGroupController = new DeleteGroupController();

groupsRoutes.post("/", ensureAuthenticate, ensureAdmin, createGroupController.handle);
groupsRoutes.get("/", ensureAuthenticate, listGroupsController.handle);
groupsRoutes.patch("/", ensureAuthenticate, ensureAdmin, updateGroupController.handle);
groupsRoutes.delete("/:id", ensureAuthenticate, ensureAdmin, deleteGroupController.handle);

export { groupsRoutes }  