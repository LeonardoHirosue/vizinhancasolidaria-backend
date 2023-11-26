import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListResidencesUseCase } from "./ListResidencesUseCase";

class ListResidencesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listResidencesUseCase = container.resolve(ListResidencesUseCase)

        const residences = await listResidencesUseCase.execute();

        return response.status(200).json(residences);
    }
}

export { ListResidencesController }