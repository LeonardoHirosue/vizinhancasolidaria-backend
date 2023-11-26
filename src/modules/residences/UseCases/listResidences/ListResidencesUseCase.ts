import { inject, injectable } from "tsyringe";

import { IResidencesRepository } from "@modules/residences/repositories/IResidencesRepository";
import { Residence } from "@modules/residences/infra/typeorm/entities/Residence";

@injectable()
class ListResidencesUseCase {

    constructor(
        @inject("ResidencesRepository")
        private residencesRepository: IResidencesRepository
    ){}

    async execute(): Promise<Residence[]>{
        return await this.residencesRepository.list(); 
    }
}

export { ListResidencesUseCase }