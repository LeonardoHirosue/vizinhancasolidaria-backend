import { ICreateCarsDTO } from "../dtos/ICreateCarsDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
    create(data: ICreateCarsDTO): Promise<Car>;
    findById(id: string): Promise<Car>;
    delete(id: string): Promise<void>;
}

export { ICarsRepository }