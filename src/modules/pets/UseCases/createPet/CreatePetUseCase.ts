import { inject, injectable } from "tsyringe";

import { ICreatePetsDTO } from "@modules/pets/dtos/ICreatePetsDTO";
import { IPetsRepository } from "@modules/pets/repositories/IPetsRepository";

import { Pet } from "@modules/pets/infra/typeorm/entities/Pet";

@injectable()
class CreatePetUseCase {

    constructor(
        @inject("PetsRepository")
        private petsRepository: IPetsRepository
    ){};

    async execute({ id, residence_id, name, breed, description, url_image }: ICreatePetsDTO): Promise<Pet>{
        const pet = this.petsRepository.create({
            id,
            residence_id,
            name,
            breed,
            description,
            url_image
        });

        return pet;
    }
}

export { CreatePetUseCase }