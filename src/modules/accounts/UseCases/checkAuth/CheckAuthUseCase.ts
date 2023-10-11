import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { NotFoundError } from "@shared/errors/ApiErrors";

interface IRequest {
    id: string;
}

interface IResponse {
    email: string;
    permissions?: string[];
    roles?: string[];
}

@injectable()
class CheckAuthUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ){}

    async execute({ id }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findById(id);

        if(!user) {
            throw new NotFoundError("User does not exists!");
        }

        const userReturn: IResponse = {
            email: user.email,
            permissions: [],
            roles: [user.user_role],
        }

        return userReturn;
    }
}

export { CheckAuthUseCase }