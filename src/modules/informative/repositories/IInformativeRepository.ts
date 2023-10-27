import { ICreateInformativeDTO } from "../dtos/ICreateInformativeDTO"

import { Informative } from "../infra/typeorm/entities/Informative"

interface IInformativeRepository {
    create(data: ICreateInformativeDTO): Promise<Informative>;
    list(): Promise<Informative[]>;
    findById(id: string): Promise<Informative>;
    delete(id: string): Promise<void>;
}

export { IInformativeRepository }