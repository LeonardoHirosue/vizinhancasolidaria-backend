import { getRepository, Repository } from "typeorm";

import { ICreateResidenceDTO } from "@modules/residences/dtos/ICreateResidenceDTO";
import { IResidencesRepository } from "@modules/residences/repositories/IResidencesRepository";

import { Residence } from "../entities/Residence";
import { Street } from "@modules/streets/infra/typeorm/entities/Street";

class ResidencesRepository implements IResidencesRepository {

    private repository: Repository<Residence>;
    private streetRepository: Repository<Street>;

    constructor(){
        this.repository = getRepository(Residence);
        this.streetRepository = getRepository(Street);
    }

    async create({ street, number }: ICreateResidenceDTO): Promise<Residence> {
        const residence = this.repository.create({
            street: street,
            number
        });

        await this.repository.save(residence);

        return residence;
    }
    
    async findById(id: string): Promise<Residence> {
        return await this.repository.findOne(id)
    }

    async findAllByStreetId (street: string): Promise<Residence[]> {
        return this.repository.find({street});
    }

    
    async findResidence({ street, number }: ICreateResidenceDTO): Promise<Residence> {
        return await this.repository.findOne({
            where: {
                number,
                street: {
                    id: street.id,
                }
            }
        });
    }
    
    async list(): Promise<Residence[]> {
        return await this.repository.find({ 
            relations: { 
                street: true, 
                pets: true, 
                cars:true, 
                users:true 
            }
        });
    }

}

export { ResidencesRepository }