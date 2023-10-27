import { getRepository, Repository } from "typeorm";

import { ICreateResidenceDTO } from "@modules/residences/dtos/ICreateResidenceDTO";
import { IResidencesRepository } from "@modules/residences/repositories/IResidencesRepository";

import { Residence } from "../entities/Residence";

class ResidencesRepository implements IResidencesRepository {

    private repository: Repository<Residence>;

    constructor(){
        this.repository = getRepository(Residence);
    }

    async create({ id, groups_streets_id, number, phone }: ICreateResidenceDTO): Promise<Residence> {
        const residence = this.repository.create({
            id,
            groups_streets_id,
            number,
            phone
        });

        await this.repository.save(residence);

        return residence;
    }

    async findAllByGroupStreetId (groups_streets_id: string): Promise<Residence[]> {
        return this.repository.find({groups_streets_id});
    }

}

export { ResidencesRepository }