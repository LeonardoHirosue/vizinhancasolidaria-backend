import { inject, injectable } from "tsyringe";

import { Street } from "@modules/streets/infra/typeorm/entities/Street";
import { IStreetsRepository } from "@modules/streets/repositories/IStreetsRepository";

@injectable()
class ListStreetsUseCase {

    constructor(
        @inject("StreetsRepository")
        private streetsRepository: IStreetsRepository
    ){}

    async execute(): Promise<Street[]>{
        const streets = await this.streetsRepository.list();

        return streets;
    }
}

export { ListStreetsUseCase }