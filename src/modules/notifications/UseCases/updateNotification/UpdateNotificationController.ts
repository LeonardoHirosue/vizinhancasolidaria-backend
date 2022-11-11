import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateNotificationUseCase } from "./UpdateNotificationUseCase";

class UpdateNotificationController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id, status } = request.body;

        const updateNotificationUseCase = container.resolve(UpdateNotificationUseCase)

        const notificationReturn = await updateNotificationUseCase.execute(id, status);

        return response.status(200).json(notificationReturn);
    }
}

export { UpdateNotificationController }