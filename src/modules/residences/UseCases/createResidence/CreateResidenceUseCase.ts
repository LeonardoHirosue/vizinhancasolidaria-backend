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
    
    async execute({street_id, number}: ICreateResidenceDTO): Promise<Residence> {
        const residence = this.residencesRepository.create({
            street_id,
            number
        });

        return residence;
    }
}

export { CreateResidenceUseCase }