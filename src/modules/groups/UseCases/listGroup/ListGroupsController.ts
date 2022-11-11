import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListGroupsUseCase } from "./ListGroupsUseCase";

class ListGroupsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listGroupsUseCase = container.resolve(ListGroupsUseCase);

        const groups = await listGroupsUseCase.execute();

        return response.status(200).json(groups);
    }
}

export { ListGroupsController }