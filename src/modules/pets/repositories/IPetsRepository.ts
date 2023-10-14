import { ICreatePetsDTO } from "../dtos/ICreatePetsDTO";

import { Pet } from "../infra/typeorm/entities/Pet";

interface IPetsRepository {
    create(data: ICreatePetsDTO): Promise<Pet>;
}

export { IPetsRepository }