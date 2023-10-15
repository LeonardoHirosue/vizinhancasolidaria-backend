import { ICreateInformativeDTO } from "@modules/informative/dtos/ICreateInformativeDTO";
import { IInformativeRepository } from "../IInformativeRepository";

import { Informative } from "@modules/informative/infra/typeorm/entities/Informative";

class InformativeRepositoryInMemory implements IInformativeRepository{
    informative: Informative[] = [];

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

        this.informative.push(informative);

        return informative;
    }
}

export { InformativeRepositoryInMemory }