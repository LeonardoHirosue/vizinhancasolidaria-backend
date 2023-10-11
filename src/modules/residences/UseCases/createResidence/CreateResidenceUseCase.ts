import { inject, injectable } from "tsyringe";

import { ICreateResidenceDTO } from "@modules/residences/dtos/ICreateResidenceDTO";
import { IResidencesRepository } from "@modules/residences/repositories/IResidencesRepository";

import { Residence } from "@modules/residences/infra/typeorm/entities/Residence";

@injectable()
class CreateResidenceUseCase {
    constructor(
        @inject("ResidencesRepository")
        private residencesRepository: IResidencesRepository
    ){}
    async execute({groups_streets_id, number, phone}: ICreateResidenceDTO): Promise<Residence> {
        const residence = this.residencesRepository.create({
            groups_streets_id,
            number,
            phone
        });

        return residence;
    }
}

export { CreateResidenceUseCase }