import { ICarsRepository } from "../ICarsRepository";
import { ICreateCarsDTO } from "@modules/cars/dtos/ICreateCarsDTO";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";

class CarsRepositoryInMemory implements ICarsRepository{
    cars: Car[] = [];

    async create({ id, residence_id, color, license_plate, brand, model }: ICreateCarsDTO): Promise<Car>{
        const car = new Car();

        Object.assign(car, {
            id,
            residence_id,
            color,
            license_plate,
            brand,
            model
        });

        this.cars.push(car);

        return car;
    }
}

export { CarsRepositoryInMemory }