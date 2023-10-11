import { getRepository, Repository } from "typeorm";

import { ICreateGroupStreetDTO } from "@modules/groupsStreets/dtos/ICreateGroupStreetDTO";
import { IGroupsStreetsRepository } from "@modules/groupsStreets/repositories/IGroupsStreetsRepository";

import { GroupStreet } from "../entities/GroupStreet";

class GroupsStreetsRepository implements IGroupsStreetsRepository{
    
    private repository: Repository<GroupStreet>;

    constructor(){
        this.repository = getRepository(GroupStreet);
    }

    async create({ id, group_id, street_id, start_number, end_number}: ICreateGroupStreetDTO): Promise<GroupStreet> {
        const groupStreet = this.repository.create({
            id,
            group_id, 
            street_id, 
            start_number, 
            end_number
        });

        await this.repository.save(groupStreet);

        return groupStreet;
    }

}

export { GroupsStreetsRepository }