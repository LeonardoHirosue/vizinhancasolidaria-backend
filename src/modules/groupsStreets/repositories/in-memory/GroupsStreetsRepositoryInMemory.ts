import { ICreateGroupStreetDTO } from "@modules/groupsStreets/dtos/ICreateGroupStreetDTO"
import { GroupStreet } from "@modules/groupsStreets/infra/typeorm/entities/GroupStreet"

import { IGroupsStreetsRepository } from "../IGroupsStreetsRepository";

class GroupsStreetsRepositoryInMemory implements IGroupsStreetsRepository{
    groupsStreets: GroupStreet[] = []

    async create({group_id, street_id, start_number, end_number}: ICreateGroupStreetDTO): Promise<GroupStreet> {
        const groupStreet = new GroupStreet();

        Object.assign(groupStreet, {
            group_id,
            street_id,
            start_number,
            end_number
        });

        this.groupsStreets.push(groupStreet);

        return groupStreet;
    }

    async findByStreetId(street_id: string): Promise<GroupStreet> {
        return this.groupsStreets.find((groupStreet) => groupStreet.street_id === street_id);
    }
}

export { GroupsStreetsRepositoryInMemory }