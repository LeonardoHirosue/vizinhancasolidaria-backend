import { Request, Response } from "express";
import { container } from "tsyringe"

import { ListInformativesUseCase } from "./ListInformativesUseCase"

class ListInformativeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listInformativeUseCase = container.resolve(ListInformativesUseCase)

        const informatives = await listInformativeUseCase.execute();

        return response.status(200).json(informatives)
    }
}

export { ListInformativeController }