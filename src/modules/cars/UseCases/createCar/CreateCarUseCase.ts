import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ICreateCarsDTO } from "../../dtos/ICreateCarsDTO";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";

@injectable()
class CreateCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ){}

    async execute({ id, residence_id, color, license_plate, brand, model}: ICreateCarsDTO): Promise<Car>{
        const car = this.carsRepository.create({
            id,
            residence_id,
            color,
            license_plate,
            brand,
            model
        });

        return car;
    }
}

export { CreateCarUseCase }