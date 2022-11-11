import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController{
    async handle(request: Request, response: Response): Promise<Response> {

        const { id, name, birth_date, cell, email, password, rg, cpf } = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);
        
        await createUserUseCase.execute({ 
            id,
            name, 
            birth_date, 
            cell, email, 
            password, 
            rg, 
            cpf
        });

        return response.status(201).send();
    }
}

export { CreateUserController }