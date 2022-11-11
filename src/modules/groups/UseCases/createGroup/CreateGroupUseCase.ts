import { inject, injectable } from "tsyringe";

import { BadRequestError } from "@shared/errors/ApiErrors";
import { IGroupsRepository } from "../../repositories/IGroupsRepository";
import { ICreateGroupDTO } from "../../dtos/ICreateGroupDTO";
import { Group } from "../../infra/typeorm/entities/Group";

@injectable()
class CreateGroupUseCase {
    constructor(
        @inject("GroupsRepository")
        private groupsRepository: IGroupsRepository
    ){}

    async execute({name, whatsapp_url}: ICreateGroupDTO): Promise<Group>{
        const groupAlreadyExists = await this.groupsRepository.findByName(name);

        if (groupAlreadyExists) {
            throw new BadRequestError("Group already exists!");
        }

        const group = await this.groupsRepository.create({ name, whatsapp_url });

        return group;
    }
}

export { CreateGroupUseCase }