import { inject, injectable } from "tsyringe";

import { IGroupsRepository } from "@modules/groups/repositories/IGroupsRepository";
import { NotFoundError } from "@shared/errors/ApiErrors";

@injectable()
class DeleteGroupUseCase {
    constructor(
        @inject("GroupsRepository")
        private groupsRepository: IGroupsRepository
    ){}

    async execute(id: string): Promise<void>{
        const group = await this.groupsRepository.findById(id);

        if (!group) {
            throw new NotFoundError("Group not founded.");            
        }

        await this.groupsRepository.delete(id);
    }
}

export { DeleteGroupUseCase }