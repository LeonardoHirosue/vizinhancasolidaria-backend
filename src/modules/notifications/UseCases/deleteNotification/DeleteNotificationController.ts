import { Request, response, Response } from "express";
import { container } from "tsyringe";

import { DeleteNotificationUseCase } from "./DeleteNotificationUseCase";

class DeleteNotificationController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const deleteNotificationUseCase = container.resolve(DeleteNotificationUseCase);

        await deleteNotificationUseCase.execute(id);

        return response.status(200).send();
    }
}

export { DeleteNotificationController }