import { Request, Response} from "express"
import { container } from "tsyringe";
import { UpdateUserRoleUseCase } from "./UpdateUserRoleUseCase";

class UpdateUserRoleController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, role, desired_role } = request.body;

        const updateUserRoleUseCase = container.resolve(UpdateUserRoleUseCase);

        await updateUserRoleUseCase.execute({ user_id, role, desired_role});

        return response.status(204).send();
    }
}

export { UpdateUserRoleController }