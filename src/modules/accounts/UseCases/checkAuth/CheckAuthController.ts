import { Request, Response } from "express";
import { container } from "tsyringe";

import { CheckAuthUseCase } from "./CheckAuthUseCase";

class CheckAuthController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const checkAuthUseCase = container.resolve(CheckAuthUseCase);

        const user = await checkAuthUseCase.execute({ id });

        return response.json(user);
    }
}

export { CheckAuthController };