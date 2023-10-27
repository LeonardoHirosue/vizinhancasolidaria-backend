import { getRepository, Repository } from "typeorm";

import { ICreateInformativeDTO } from "@modules/informative/dtos/ICreateInformativeDTO";
import { IInformativeRepository } from "@modules/informative/repositories/IInformativeRepository";

import { Informative } from "../entities/Informative";

class InformativeRepository implements IInformativeRepository{
    
    private repository: Repository<Informative>;

    constructor(){
        this.repository = getRepository(Informative);
    }

    async create({ id, user_id, title, description, url_banner, url_source, start_date, end_date }: ICreateInformativeDTO): Promise<Informative> {
        const informative = this.repository.create({
            id,
            user_id,
            title,
            description,
            url_banner,
            url_source,
            start_date,
            end_date
        });

        await this.repository.save(informative);

        return informative;
    }

    async list(): Promise<Informative[]> {
        return this.repository.find();
    }

    async findById(id: string): Promise<Informative> {
        return this.repository.findOne(id);
    }

    async delete(id: string): Promise<void> {
        this.repository.delete(id);
    }
}

export { InformativeRepository }