import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateNotificationTypeUseCase } from "./CreateNotificationTypeUseCase";

class CreateNotificationTypeController{
    async handle(request: Request, response: Response): Promise<Response>{
        const { name, label } = request.body;

        const createNotificationTypeUseCase = container.resolve(CreateNotificationTypeUseCase);

        const notificationType = await createNotificationTypeUseCase.execute(name , label);

        return response.status(201).json(notificationType);
    }
}

export { CreateNotificationTypeController }