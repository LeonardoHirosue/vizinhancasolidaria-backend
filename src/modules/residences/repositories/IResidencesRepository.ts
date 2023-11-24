import { ICreateResidenceDTO } from "../dtos/ICreateResidenceDTO";
import { Residence } from "../infra/typeorm/entities/Residence";

interface IResidencesRepository {
    create(data: ICreateResidenceDTO): Promise<Residence>;
    findAllByStreetId(streets_id: string): Promise<Residence[]>
    findResidence(data: ICreateResidenceDTO): Promise<Residence>;
}

export { IResidencesRepository }