import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    user_id: string;
    role: string;
    desired_role: string;
}

@injectable()
class UpdateUserRoleUseCase {
    
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({user_id, role, desired_role}: IRequest): Promise<void> {

        const user = await this.usersRepository.findById(user_id)

        await this.usersRepository.updateUserRole(user.id, role, desired_role);
    }
}

export { UpdateUserRoleUseCase }