import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteInformativeUseCase } from "./DeleteInformativeUseCase";

class DeleteInformativeController {
    async handle(request: Request, response:Response): Promise<Response>{
        const { id } = request.params;

        const deleteInformativeUseCase = container.resolve(DeleteInformativeUseCase);

        await deleteInformativeUseCase.execute(id);

        return response.status(204).send();
    }
}

export { DeleteInformativeController }