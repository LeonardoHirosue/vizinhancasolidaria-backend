import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateGroupUseCase } from "./UpdateGroupUseCase";


class UpdateGroupController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id, name, whatsapp_url } = request.body;
        
        const updateGroupUseCase = container.resolve(UpdateGroupUseCase);

        const group = await updateGroupUseCase.execute({ id, name, whatsapp_url });

        return response.status(200).json(group);
    }
}

export { UpdateGroupController }