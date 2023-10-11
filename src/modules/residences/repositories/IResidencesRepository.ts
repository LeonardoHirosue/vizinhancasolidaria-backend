import { ICreateResidenceDTO } from "../dtos/ICreateResidenceDTO";
import { Residence } from "../infra/typeorm/entities/Residence";

interface IResidencesRepository {
    create(data: ICreateResidenceDTO): Promise<Residence>;
}

export { IResidencesRepository }