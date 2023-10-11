import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateResidenceUseCase } from "./CreateResidenceUseCase";

class CreateResidenceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { groups_streets_id, number, phone } = request.body;

        const createResidenceUseCase = container.resolve(CreateResidenceUseCase);

        const residence = await createResidenceUseCase.execute({
            groups_streets_id,
            number,
            phone
        });

        return response.status(201).json(residence);
    }
}

export { CreateResidenceController }