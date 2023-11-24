import { inject, injectable } from "tsyringe";

import { NotFoundError } from "@shared/errors/ApiErrors";
import { IPetsRepository } from "@modules/pets/repositories/IPetsRepository";

@injectable()
class DeletePetUseCase {

    constructor(
        @inject("PetsRepository")
        private petsRepository: IPetsRepository
    ){};

    async execute(id: string): Promise<void> {
        const pet = await this.petsRepository.findById(id);

        if(!pet) {
            throw new NotFoundError("Pet not found");
        }

        await this.petsRepository.delete(id);
    }
}

export { DeletePetUseCase }