import { getRepository, Repository } from "typeorm";

import { ICreatePetsDTO } from "@modules/pets/dtos/ICreatePetsDTO";
import { IPetsRepository } from "@modules/pets/repositories/IPetsRepository";

import { Pet } from "../entities/Pet";

class PetsRepository implements IPetsRepository{

    private repository: Repository<Pet>;

    constructor(){
        this.repository = getRepository(Pet);
    }

    async create({ residence_id, name, breed, description, url_image}: ICreatePetsDTO): Promise<Pet> {
        const pet = this.repository.create({
            residence:{
                id: residence_id
            },
            name,
            breed,
            description,
            url_image
        });

        await this.repository.save(pet);

        return pet;
    }

    async findById(id: string): Promise<Pet> {
        return await this.repository.findOneBy({id});
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

export { PetsRepository }