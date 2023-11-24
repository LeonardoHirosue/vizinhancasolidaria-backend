import { Request, Response } from "express";

import { container } from "tsyringe";
import { CreateStreetUseCase } from "./CreateStreetUseCase";

class CreateStreetController {
    async handle(request: Request, response: Response): Promise<Response>{
        const {
            name,
            state,
            city,
            district,
            postal_code
        } = request.body;

        const createStreetUseCase = container.resolve(CreateStreetUseCase);

        const street = await createStreetUseCase.execute({
            name,
            district,
            postal_code,
            state,
            city,
        });

        return response.status(201).json(street);
    }
}

export { CreateStreetController }