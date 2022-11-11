import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListStreetsUseCase } from "./ListStreetsUseCase";

class ListStreetsController {
    async handle(request: Request, response: Response){
        const listStreetsUseCase = container.resolve(ListStreetsUseCase);

        const streets = await listStreetsUseCase.execute();

        return response.status(200).json(streets);
    }
}

export { ListStreetsController }