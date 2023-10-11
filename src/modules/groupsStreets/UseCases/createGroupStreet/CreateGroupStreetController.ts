import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateGroupStreetUseCase } from "./CreateGroupStreetUseCase";

class CreateGroupStreetController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id, 
            group_id, 
            street_id, 
            start_number, 
            end_number
        } = request.body;

        const createGroupStreetUseCase = container.resolve(CreateGroupStreetUseCase);

        const groupStreet = await createGroupStreetUseCase.execute({
            id, 
            group_id, 
            street_id, 
            start_number, 
            end_number
        });

        return response.status(201).json(groupStreet);
    }
}

export { CreateGroupStreetController }