import { IPetsRepository } from "../IPetsRepository";
import { ICreatePetsDTO } from "@modules/pets/dtos/ICreatePetsDTO";

import { Pet } from "@modules/pets/infra/typeorm/entities/Pet";

class PetsRepositoryInMemory implements IPetsRepository{
    pets: Pet[] = [];

    async create({ id, residence_id, name, description, breed, url_image }: ICreatePetsDTO): Promise<Pet> {
        const pet = new Pet();

        Object.assign(pet, {
            id,
            residence_id,
            name,
            description,
            breed,
            url_image
        });

        this.pets.push(pet);

        return pet;
    }
}

export { PetsRepositoryInMemory }