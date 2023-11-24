import { ICreateStreetDTO } from "@modules/streets/dtos/ICreateStreetDTO";
import { IFindStreetDTO } from "@modules/streets/dtos/IFindStreetDTO";
import { Street } from "@modules/streets/infra/typeorm/entities/Street";
import { IStreetsRepository } from "../IStreetsRepository";

class StreetsRepositoryInMemory implements IStreetsRepository{
    
    streets: Street[] = [];
    
    async create({ name, state, city, district, postal_code }: ICreateStreetDTO): Promise<Street> {
        const street = new Street();
        
        Object.assign(street, ({
            name, 
            state, 
            city, 
            district, 
            postal_code 
        }));
        
        this.streets.push(street);
        
        return street;
    }
    
    async findStreet({name, city, district, postal_code, state }: ICreateStreetDTO): Promise<Street> {
        return this.streets.find((street) => `${street.name}${street.city}${street.district}${postal_code}${state}` === `${name}${city}${district}${postal_code}${state}`);
    }

    async list(): Promise<Street[]> {
        return this.streets;
    }

    async findById(id: string): Promise<Street> {
        return this.streets.find((street) => street.id === id);
    }

    async delete(id: string): Promise<void> {
        const streetIndex = this.streets.findIndex((street) => street.id === id);

        this.streets.splice(streetIndex, 1);
    }
}

export { StreetsRepositoryInMemory }