import { inject, injectable } from "tsyringe";

import { ApiError, NotFoundError } from "@shared/errors/ApiErrors";
import { IGroupsRepository } from "@modules/groups/repositories/IGroupsRepository";
import { ICreateGroupDTO } from "@modules/groups/dtos/ICreateGroupDTO";
import { Group } from "@modules/groups/infra/typeorm/entities/Group";

@injectable()
class UpdateGroupUseCase {
    constructor(
        @inject("GroupsRepository")
        private groupsRepository: IGroupsRepository
    ){}

    async execute({ id, name, whatsapp_url}: ICreateGroupDTO): Promise<Group>{
        const group = await this.groupsRepository.findById(id);

        if (!group) { 
            throw new NotFoundError("Group not founded.");            
        }

        group.name = name;
        group.whatsapp_url = whatsapp_url;

        const updatedGroup = await this.groupsRepository.create(group);

        return updatedGroup;
    }
}

export { UpdateGroupUseCase }