import { IUserResidenceDTO } from "@modules/usersResidences/dtos/IUserResidenceDTO";
import { IUsersResidencesRepository } from "../IUsersResidencesRepository";

import { UserResidence } from "@modules/usersResidences/infra/typeorm/entities/UserResidence";

class UsersResidencesRepositoryInMemory implements IUsersResidencesRepository{
    usersResidences: UserResidence[] = [];

    async create({ id, user_id, residence_id }: IUserResidenceDTO): Promise<UserResidence> {
        const userResidence = new UserResidence();
        
        Object.assign(userResidence, {
            id,
            user_id,
            residence_id
        });

        this.usersResidences.push(userResidence);

        return userResidence;
    }
}

export { UsersResidencesRepositoryInMemory }