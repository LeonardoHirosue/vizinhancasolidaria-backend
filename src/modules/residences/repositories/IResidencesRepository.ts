import { ICreateResidenceDTO } from "../dtos/ICreateResidenceDTO";

interface IResidencesRepository {
    create(data: ICreateResidenceDTO): Promise<void>;
}

export { IResidencesRepository }