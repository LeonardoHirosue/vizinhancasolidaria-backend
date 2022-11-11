import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUserNotificationsUseCase } from "./ListUserNotificationsUseCase";

class ListUserNotificationsController{
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.user;

        const listUserNotificationsUseCase = container.resolve(ListUserNotificationsUseCase);

        const notifications = await listUserNotificationsUseCase.execute(id);

        return response.status(200).json(notifications);
    }
}

export { ListUserNotificationsController }