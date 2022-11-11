import { inject, injectable } from "tsyringe";

import { Group } from "@modules/groups/infra/typeorm/entities/Group";
import { IGroupsRepository } from "@modules/groups/repositories/IGroupsRepository";

@injectable()
class ListGroupsUseCase{
    constructor(
        @inject("GroupsRepository")
        private groupsRepository: IGroupsRepository
    ){}

    async execute(): Promise<Group[]>{
        const groups = await this.groupsRepository.list();

        return groups;
    }
}

export { ListGroupsUseCase }