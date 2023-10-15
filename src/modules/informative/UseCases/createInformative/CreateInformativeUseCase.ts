import { inject, injectable } from "tsyringe";

import { ICreateInformativeDTO } from "@modules/informative/dtos/ICreateInformativeDTO";
import { IInformativeRepository } from "@modules/informative/repositories/IInformativeRepository";

import { Informative } from "@modules/informative/infra/typeorm/entities/Informative";

@injectable()
class CreateInformativeUseCase {

    constructor(
        @inject("InformativeRepository")
        private informativeRepository: IInformativeRepository
    ){}

    async execute({ id, user_id, title, description, url_banner, url_source, start_date, end_date }: ICreateInformativeDTO): Promise<Informative>{
        const informative = await this.informativeRepository.create({
            id,
            user_id,
            title,
            description,
            url_banner,
            url_source,
            start_date: new Date(start_date),
            end_date: new Date(end_date)
        });

        return informative;
    }
}

export { CreateInformativeUseCase }