import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteNotificationTypeUseCase } from "./DeleteNotificationTypeUseCase";

class DeleteNotificationTypeController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id }  = request.params;

        const deleteNotificationTypeUseCase = container.resolve(DeleteNotificationTypeUseCase);

        await deleteNotificationTypeUseCase.execute(id);

        return response.status(204).send();
    }
}

export { DeleteNotificationTypeController }