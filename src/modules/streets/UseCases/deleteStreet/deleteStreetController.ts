import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteStreetUseCase } from "./deleteStreetUseCase";

class DeleteStreetController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const deleteStreetUseCase = container.resolve(DeleteStreetUseCase);

        await deleteStreetUseCase.execute(id);

        return response.status(204).send();
    }
}

export { DeleteStreetController }