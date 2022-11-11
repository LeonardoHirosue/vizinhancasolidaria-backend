import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteGroupUseCase } from "./DeleteGroupUseCase";

class DeleteGroupController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteGroupUseCase = container.resolve(DeleteGroupUseCase);

        await deleteGroupUseCase.execute(id);

        return response.status(204).send();
    }
}

export { DeleteGroupController }