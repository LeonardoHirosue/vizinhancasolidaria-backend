import { Request, Response } from "express";
import { container } from "tsyringe";
import { UserInfoUseCase } from "./UserInfoUseCase";

class UserInfoController {
    async handle (request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const userInfoUseCase = container.resolve(UserInfoUseCase);

        const user = await userInfoUseCase.execute(id);

        return response.status(200).send(user);
    }
}

export { UserInfoController }