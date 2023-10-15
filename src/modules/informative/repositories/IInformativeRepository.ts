import { ICreateInformativeDTO } from "../dtos/ICreateInformativeDTO"

import { Informative } from "../infra/typeorm/entities/Informative"

interface IInformativeRepository {
    create(data: ICreateInformativeDTO): Promise<Informative>;
}

export { IInformativeRepository }