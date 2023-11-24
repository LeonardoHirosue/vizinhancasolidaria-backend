import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePetUseCase } from "./DeletePetUseCase";

class DeletePetController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deletePetUseCase = container.resolve(DeletePetUseCase);

        await deletePetUseCase.execute(id);

        return response.status(204).send();
    }
}

export { DeletePetController }