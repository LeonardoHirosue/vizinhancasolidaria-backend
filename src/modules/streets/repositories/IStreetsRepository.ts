import { ICreateStreetDTO } from "../dtos/ICreateStreetDTO";
import { Street } from "../infra/typeorm/entities/Street";

interface IStreetsRepository {
    create(data: ICreateStreetDTO): Promise<Street>;
    findByName(name: string): Promise<Street>;
    list(): Promise<Street[]>;
    findById(id: string): Promise<Street>;
    delete(id: string): Promise<void>;
}

export {IStreetsRepository }