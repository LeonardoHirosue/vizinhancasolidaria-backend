import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateInformativeUseCase } from "./CreateInformativeUseCase";

class CreateInformativeController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { 
            id, 
            user_id, 
            title, 
            description, 
            url_banner, 
            url_source, 
            start_date, 
            end_date 
        } = request.body;

        const createInformativeUseCase = container.resolve(CreateInformativeUseCase);

        const informative = await createInformativeUseCase.execute({
            id, 
            user_id, 
            title, 
            description, 
            url_banner, 
            url_source, 
            start_date, 
            end_date 
        });

        return response.status(201).json(informative);
    }
}

export { CreateInformativeController }