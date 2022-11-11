import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListNotificationTypesUseCase } from "./ListNotificationTypesUseCase";

class ListNotificationTypesController{
    async handle(request: Request, response: Response): Promise<Response> {
        const listNotificationTypesUseCase = container.resolve(ListNotificationTypesUseCase);

        const allNotificationTypes = await listNotificationTypesUseCase.execute();

        return response.status(200).json(allNotificationTypes);
    }
}

export { ListNotificationTypesController }