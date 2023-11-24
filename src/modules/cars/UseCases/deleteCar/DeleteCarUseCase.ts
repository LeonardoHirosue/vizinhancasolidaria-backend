import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { NotFoundError } from "@shared/errors/ApiErrors";
import { inject, injectable } from "tsyringe";


@injectable()
class DeleteCarUseCase {
    
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ){}

    async execute(id: string): Promise<void> {
        const car = await this.carsRepository.findById(id);

        if(!car) {
            throw new NotFoundError("Car not found.");            
        }

        await this.carsRepository.delete(id);
    }
}

export { DeleteCarUseCase }