import { ICreateResidenceDTO } from "@modules/residences/dtos/ICreateResidenceDTO";
import { Residence } from "@modules/residences/infra/typeorm/entities/Residence";

import { IResidencesRepository } from "../IResidencesRepository";

class ResidencesRepositoryInMemory implements IResidencesRepository {

    residences: Residence[] = [];

    async create({number, street_id}: ICreateResidenceDTO): Promise<Residence> {
        const residence = new Residence();

        Object.assign(residence, {
            number,
            street_id
        });

        this.residences.push(residence);

        return residence;
    }

    async findAllByStreetId(street_id: string): Promise<Residence[]> {
        return this.residences.filter((residence) => residence.street_id === street_id);
    }
    
    async findResidence({street_id, number}: ICreateResidenceDTO): Promise<Residence> {
        return this.residences.find((residence) => `${residence.street_id}${residence.number}` === `${street_id}${number}`);
    }
}

export { ResidencesRepositoryInMemory }