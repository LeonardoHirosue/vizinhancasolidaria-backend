import { ICreateGroupDTO } from "../dtos/ICreateGroupDTO"
import { Group } from "../infra/typeorm/entities/Group"


interface IGroupsRepository {
    create(data: ICreateGroupDTO): Promise<Group>;
    findByName(name: string): Promise<Group>;
    list(): Promise<Group[]>;
    findById(id: string): Promise<Group>;
    delete(id: string): Promise<void>;
}

export { IGroupsRepository }