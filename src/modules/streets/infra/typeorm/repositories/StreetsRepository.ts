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
        country,
        state,
        city,
        district,
        postal_code
    }: ICreateStreetDTO): Promise<Street> {
        const street = this.repository.create({
            name,
            country,
            state,
            city,
            district,
            postal_code
        });

        await this.repository.save(street);

        return street;
    }

    async findByName(name: string): Promise<Street> {
        return await this.repository.findOne({ name });
    }

    async list(): Promise<Street[]> {
        return await this.repository.find();
    }

    async findById(id: string): Promise<Street> {
        return await this.repository.findOne(id);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

export { StreetsRepository }