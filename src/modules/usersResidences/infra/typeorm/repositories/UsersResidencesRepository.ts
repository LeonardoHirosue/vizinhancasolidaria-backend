import { getRepository, Repository } from "typeorm";

import { IUserResidenceDTO } from "@modules/usersResidences/dtos/IUserResidenceDTO";
import { IUsersResidencesRepository } from "@modules/usersResidences/repositories/IUsersResidencesRepository";

import { UserResidence } from "../entities/UserResidence";

class UsersResidencesRepository implements IUsersResidencesRepository{

    private repository: Repository<UserResidence>;

    constructor(){
        this.repository = getRepository(UserResidence);
    }

    async create({ id, user_id, residence_id }: IUserResidenceDTO): Promise<UserResidence> {
        const userResidence = this.repository.create({
            id,
            user_id,
            residence_id
        });

        await this.repository.save(userResidence);

        return userResidence;
    }
}

export { UsersResidencesRepository }