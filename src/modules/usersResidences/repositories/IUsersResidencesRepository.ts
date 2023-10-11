import { IUserResidenceDTO } from "../dtos/IUserResidenceDTO";
import { UserResidence } from "../infra/typeorm/entities/UserResidence";

interface IUsersResidencesRepository {
    create(data: IUserResidenceDTO): Promise<UserResidence>;
}

export { IUsersResidencesRepository }