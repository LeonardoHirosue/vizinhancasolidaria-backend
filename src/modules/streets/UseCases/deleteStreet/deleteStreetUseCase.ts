import { inject, injectable } from "tsyringe";

import { NotFoundError } from "@shared/errors/ApiErrors";
import { IStreetsRepository } from "@modules/streets/repositories/IStreetsRepository";

@injectable()
class DeleteStreetUseCase {

    constructor(
        @inject("StreetsRepository")
        private streetsRepository: IStreetsRepository
    ){}

    async execute(id: string): Promise<void>{
        const street = await this.streetsRepository.findById(id);

        if (!street) {
            throw new NotFoundError("Street not found");
        }

        await this.streetsRepository.delete(id);
    }
}

export { DeleteStreetUseCase }