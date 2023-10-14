import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
    async handle(request: Request, response: Response): Promise<Response>{
        const {id, residence_id, color, license_plate, brand, model} = request.body;

        const createCarUSeCase = container.resolve(CreateCarUseCase); 

        const car = await createCarUSeCase.execute({
            id,
            residence_id,
            color,
            license_plate,
            brand,
            model
        })

        return response.status(201).json(car);
    }
}

export { CreateCarController }