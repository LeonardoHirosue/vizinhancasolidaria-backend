import { BadRequestError } from "@shared/errors/ApiErrors";

import { ICreateStreetDTO } from "@modules/streets/dtos/ICreateStreetDTO";
import { Street } from "@modules/streets/infra/typeorm/entities/Street";
import { IStreetsRepository } from "@modules/streets/repositories/IStreetsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateStreetUseCase {
    constructor(
        @inject("StreetsRepository")
        private streetsReposity: IStreetsRepository
    ){}

    async execute({ name, state, city, district, postal_code }: ICreateStreetDTO): Promise<Street> {
        const streetAlreadtExists = await this.streetsReposity.findStreet({ name, state, city, district, postal_code });

        if (streetAlreadtExists) {
            throw new BadRequestError("Esta rua já está cadastrada no sistema!");
        }

        const street = await this.streetsReposity.create({
            name,
            state,
            city,
            district,
            postal_code
        });

        return street;
    }
}

export { CreateStreetUseCase };
