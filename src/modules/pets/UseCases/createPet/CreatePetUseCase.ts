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

    async execute({ residence_id, name, breed, description, url_image }: ICreatePetsDTO): Promise<Pet>{
        console.log("CreatePET UseCASE")
        console.log("residence_id", residence_id)
        console.log("name", name)
        console.log("breed", breed)
        console.log("description", description)
        console.log("url_image", url_image)
        const pet = this.petsRepository.create({
            residence_id,
            name,
            breed,
            description,
            url_image,
        });

        return pet;
    }
}

export { CreatePetUseCase }