import { inject, injectable } from "tsyringe";

import { ICreateGroupStreetDTO } from "@modules/groupsStreets/dtos/ICreateGroupStreetDTO";
import { IGroupsStreetsRepository } from "@modules/groupsStreets/repositories/IGroupsStreetsRepository";
import { GroupStreet } from "@modules/groupsStreets/infra/typeorm/entities/GroupStreet";

@injectable()
class CreateGroupStreetUseCase {
    constructor(
        @inject("GroupsStreetsRepository")
        private groupsStreetsRepository: IGroupsStreetsRepository
    ){}
    async execute({ id, group_id, street_id, start_number, end_number }: ICreateGroupStreetDTO): Promise<GroupStreet>{
        const groupStreet = await this.groupsStreetsRepository.create({
            id,
            group_id, 
            street_id, 
            start_number, 
            end_number
        });

        return groupStreet;
    };
}

export { CreateGroupStreetUseCase }