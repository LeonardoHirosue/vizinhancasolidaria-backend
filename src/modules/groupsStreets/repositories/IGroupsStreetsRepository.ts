import { ICreateGroupStreetDTO } from "../dtos/ICreateGroupStreetDTO"
import { GroupStreet } from "../infra/typeorm/entities/GroupStreet";

interface IGroupsStreetsRepository {
    create(data: ICreateGroupStreetDTO): Promise<GroupStreet>;
}

export { IGroupsStreetsRepository }