import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePetUseCase } from "./CreatePetUseCase";

class CreatePetController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, residence_id, name, breed, description, url_image } = request.body;

        const createPetUseCase = container.resolve(CreatePetUseCase);

        const pet = await createPetUseCase.execute({
            id,
            residence_id,
            name,
            breed,
            description,
            url_image
        });

        return response.status(201).json(pet);
    }
}

export { CreatePetController }