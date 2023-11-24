import { getRepository, Repository } from "typeorm";

import { ICreateResidenceDTO } from "@modules/residences/dtos/ICreateResidenceDTO";
import { IResidencesRepository } from "@modules/residences/repositories/IResidencesRepository";

import { Residence } from "../entities/Residence";

class ResidencesRepository implements IResidencesRepository {

    private repository: Repository<Residence>;

    constructor(){
        this.repository = getRepository(Residence);
    }

    async create({ id, street_id, number }: ICreateResidenceDTO): Promise<Residence> {
        const residence = this.repository.create({
            id,
            street_id,
            number
        });

        await this.repository.save(residence);

        return residence;
    }

    async findAllByStreetId (street_id: string): Promise<Residence[]> {
        return this.repository.find({street_id});
    }

    
    async findResidence({ street_id, number }: ICreateResidenceDTO): Promise<Residence> {
        return await this.repository.findOne({
            where: {
                number,
                street_id
            }
        });
    }

}

export { ResidencesRepository }