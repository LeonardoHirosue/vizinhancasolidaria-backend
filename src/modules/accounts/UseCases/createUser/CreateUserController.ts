import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController{
    async handle(request: Request, response: Response): Promise<Response> {

        const { 
            name, 
            email, 
            password, 
            cell, 
            birth_date, 
            rg, 
            cpf,
            postal_code, 
            state, 
            city, 
            district, 
            street, 
            residence_number, 
            role 
        } = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);
        
        await createUserUseCase.execute({ 
            name, 
            email, 
            password, 
            cell, 
            birth_date, 
            rg, 
            cpf,
            postal_code, 
            state, 
            city, 
            district, 
            street, 
            residence_number, 
            role 
        });

        return response.status(201).send();
    }
}

export { CreateUserController }