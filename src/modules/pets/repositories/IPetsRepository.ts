import { ICreatePetsDTO } from "../dtos/ICreatePetsDTO";

import { Pet } from "../infra/typeorm/entities/Pet";

interface IPetsRepository {
    create(data: ICreatePetsDTO): Promise<Pet>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Pet>;
}

export { IPetsRepository }