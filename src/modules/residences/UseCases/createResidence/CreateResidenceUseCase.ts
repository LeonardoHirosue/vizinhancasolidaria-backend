import { inject, injectable } from "tsyringe";

import { ICreateResidenceDTO } from "@modules/residences/dtos/ICreateResidenceDTO";
import { IResidencesRepository } from "@modules/residences/repositories/IResidencesRepository";

// @injectable()
class CreateResidenceUseCase {
    constructor(
        // @inject("ResidencesRepository")
        private residencesRepository: IResidencesRepository
    ){}
    async execute({number, phone, groups_streets_id}: ICreateResidenceDTO): Promise<void> {
        this.residencesRepository.create({
            number,
            phone,
            groups_streets_id
        });
    }
}

export { CreateResidenceUseCase }