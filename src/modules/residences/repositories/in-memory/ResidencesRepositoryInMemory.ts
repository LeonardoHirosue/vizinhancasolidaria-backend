import { ICreateResidenceDTO } from "@modules/residences/dtos/ICreateResidenceDTO";
import { Residence } from "@modules/residences/infra/typeorm/entities/Residence";

import { IResidencesRepository } from "../IResidencesRepository";

class ResidencesRepositoryInMemory implements IResidencesRepository {
    residences: Residence[] = [];

    async create({number, phone, groups_streets_id}: ICreateResidenceDTO): Promise<Residence> {
        const residence = new Residence();

        Object.assign(residence, {
            number,
            phone,
            groups_streets_id
        });

        this.residences.push(residence);

        return residence;
    }
}

export { ResidencesRepositoryInMemory }