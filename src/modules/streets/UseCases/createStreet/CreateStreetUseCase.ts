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

    async execute({ name, country, state, city, district, postal_code }: ICreateStreetDTO): Promise<Street> {
        const streetAlreadtExists = await this.streetsReposity.findByName(name);

        if (streetAlreadtExists) {
            throw new BadRequestError("Street already exists!");
        }

        const street = await this.streetsReposity.create({
            name,
            country,
            state,
            city,
            district,
            postal_code
        });

        return street;
    }
}

export { CreateStreetUseCase };
