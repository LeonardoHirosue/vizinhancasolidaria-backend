import { ICreateInformativeDTO } from "@modules/informative/dtos/ICreateInformativeDTO";
import { IInformativeRepository } from "../IInformativeRepository";

import { Informative } from "@modules/informative/infra/typeorm/entities/Informative";

class InformativeRepositoryInMemory implements IInformativeRepository{
        
    informatives: Informative[] = [];

    async create({ id, user_id, title, description, url_banner, url_source, start_date, end_date }: ICreateInformativeDTO): Promise<Informative>{
        const informative = new Informative();
        
        Object.assign(informative, {
            id,
            user_id,
            title,
            description,
            url_banner,
            url_source,
            start_date,
            end_date
        });

        this.informatives.push(informative);

        return informative;
    }

    async list(): Promise<Informative[]> {
        return this.informatives;
    }

    async findById(id: string): Promise<Informative> {
        return this.informatives.find((informative) => informative.id === id);
    }

    async delete(id: string): Promise<void> {
        const informative = this.informatives.findIndex((informative) => informative.id === id);

        this.informatives.splice(informative, 1);
    }
}

export { InformativeRepositoryInMemory }