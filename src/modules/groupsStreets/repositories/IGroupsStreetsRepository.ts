import { ICreateGroupStreetDTO } from "../dtos/ICreateGroupStreetDTO"

interface IGroupsStreetsRepository {
    create(data: ICreateGroupStreetDTO): Promise<void>;
}

export { IGroupsStreetsRepository }