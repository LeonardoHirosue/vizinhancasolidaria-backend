import { getRepository, Repository } from "typeorm";

import { ICreateCarsDTO } from "@modules/cars/dtos/ICreateCarsDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository{

    private repository: Repository<Car>;

    constructor(){
        this.repository = getRepository(Car)
    }
    
    async create({id, residence_id, color, license_plate, brand, model}: ICreateCarsDTO): Promise<Car> {
        const car = this.repository.create({
            id,
            residence_id,
            color,
            license_plate,
            brand,
            model
        });

        await this.repository.save(car);

        return car;
    }
}

export { CarsRepository }