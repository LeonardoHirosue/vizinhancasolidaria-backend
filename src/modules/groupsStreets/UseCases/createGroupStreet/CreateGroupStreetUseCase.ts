import { inject, injectable } from "tsyringe";

import { ICreateGroupStreetDTO } from "@modules/groupsStreets/dtos/ICreateGroupStreetDTO";
import { IGroupsStreetsRepository } from "@modules/groupsStreets/repositories/IGroupsStreetsRepository";

// @injectable()
class CreateGroupStreetUseCase {
    constructor(
        // @inject("GroupsStreetsRepository")
        private groupsStreetsRepository: IGroupsStreetsRepository
    ){}
    async execute({group_id, street_id, start_number, end_number}: ICreateGroupStreetDTO): Promise<void>{
        this.groupsStreetsRepository.create({
            group_id, 
            street_id, 
            start_number, 
            end_number
        });
    };
}

export { CreateGroupStreetUseCase }