import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { User } from "@modules/accounts/infra/typeorm/entities/User";

@injectable()
class UserInfoUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ){}

    async execute(user_id: string): Promise<User>{
        const user = await this.usersRepository.findById(user_id);

        return user;
    }
}

export { UserInfoUseCase }