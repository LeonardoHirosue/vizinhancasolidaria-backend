import { inject, injectable } from "tsyringe";

import { IUsersResidencesRepository } from "@modules/usersResidences/repositories/IUsersResidencesRepository";
import { IUserResidenceDTO } from "@modules/usersResidences/dtos/IUserResidenceDTO";
import { UserResidence } from "@modules/usersResidences/infra/typeorm/entities/UserResidence";

@injectable()
class CreateUserResidenceUseCase {
    constructor(
        @inject("UsersResidencesRepository")
        private usersResidencesRepository: IUsersResidencesRepository
    ){}

    async execute({ id, residence_id, user_id }: IUserResidenceDTO): Promise<UserResidence>{
        const userResidence = await this.usersResidencesRepository.create({
            id,
            residence_id,
            user_id
        });

        return userResidence;
    }
}

export { CreateUserResidenceUseCase }