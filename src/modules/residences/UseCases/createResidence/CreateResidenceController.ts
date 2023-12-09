import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateResidenceUseCase } from "./CreateResidenceUseCase";

class CreateResidenceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { street, number } = request.body;

        const createResidenceUseCase = container.resolve(CreateResidenceUseCase);

        const residence = await createResidenceUseCase.execute({
            street,
            number
        });

        return response.status(201).json(residence);
    }
}

export { CreateResidenceController }