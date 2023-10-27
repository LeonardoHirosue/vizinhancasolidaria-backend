import { inject, injectable } from "tsyringe";

import { Informative } from "@modules/informative/infra/typeorm/entities/Informative";
import { IInformativeRepository } from "@modules/informative/repositories/IInformativeRepository";

@injectable()
class ListInformativesUseCase {

    constructor(
        @inject("InformativeRepository")
        private informativeRepository: IInformativeRepository
    ){}

    async execute(): Promise<Informative[]> {
        return this.informativeRepository.list();
    }
}

export { ListInformativesUseCase }