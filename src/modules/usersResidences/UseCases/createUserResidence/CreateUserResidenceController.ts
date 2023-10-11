import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserResidenceUseCase } from "./CreateUserResidenceUseCase";

class CreateUserResidenceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { 
            id, 
            user_id, 
            residence_id 
        } = request.body;

        const createUserResidenceUseCase = container.resolve(CreateUserResidenceUseCase);

        const userResidence = await createUserResidenceUseCase.execute({
            id,
            user_id,
            residence_id
        });

        return response.status(201).json(userResidence);
    }
}

export { CreateUserResidenceController }