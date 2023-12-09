import { getRepository, Repository } from "typeorm";

import { Street } from "../entities/Street";
import { ICreateStreetDTO } from "@modules/streets/dtos/ICreateStreetDTO";
import { IStreetsRepository } from "@modules/streets/repositories/IStreetsRepository";

class StreetsRepository implements IStreetsRepository {

    private repository: Repository<Street>;

    constructor(){
        this.repository = getRepository(Street);
    }

    async create({
        name,
        state,
        city,
        district,
        postal_code
    }: ICreateStreetDTO): Promise<Street> {
        const street = this.repository.create({
            name,
            state,
            city,
            district,
            postal_code
        });

        await this.repository.save(street);

        return street;
    }

    async findStreet({ 
        name, 
        city, 
        district, 
        postal_code, 
        state 
    }: ICreateStreetDTO): Promise<Street> {
        return await this.repository.findOne({
            where: {
                name,
                city,
                district,
                postal_code,
                state
            } 
        });
    }

    async list(): Promise<Street[]> {
        return await this.repository.find({ relations: { residences: true }});
    }

    async findById(id: string): Promise<Street> {
        return await this.repository.findOneBy({id:id});
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

export { StreetsRepository }