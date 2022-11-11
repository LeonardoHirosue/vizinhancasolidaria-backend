import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateNotificationUseCase } from "./CreateNotificationUseCase";

class CreateNotificationController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { type_id, title, description, license_plate } = request.body;

        const { id } = request.user;

        const createNotificationUseCase = container.resolve(CreateNotificationUseCase);

        const notification = await createNotificationUseCase.execute({ 
            user_id: id,
            type_id,
            title,
            description,
            license_plate
        });
        
        return response.status(201).json(notification);
    }
}

export { CreateNotificationController }