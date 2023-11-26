import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IResidencesRepository } from "@modules/residences/repositories/IResidencesRepository";
import { IStreetsRepository } from "@modules/streets/repositories/IStreetsRepository";


interface IResponse {
    id: string;
    name: string;
    birth_date: Date; 
    cellphone: string; 
    email: string; 
    rg: string; 
    cpf: string;
    postal_code: string; 
    state: string;
    city: string;
    district: string;
    street: string;
    residence_number: number; 
    role?: string;
    desired_role: string;
    avatar?: string;
}

@injectable()
class UserInfoUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("ResidencesRepository")
        private residencesRepository: IResidencesRepository,
        @inject("StreetsRepository")
        private streetRepository: IStreetsRepository
    ){}

    async execute(user_id: string): Promise<IResponse>{
        const user = await this.usersRepository.findById(user_id);

        const residence = await this.residencesRepository.findById(user.residence_id);

        const street = await this.streetRepository.findById(residence.street_id);

        const userInfo = {
            id: user.id,
            name: user.name,
            birth_date: user.birth_date, 
            cellphone: user.cellphone, 
            email: user.email, 
            rg: user.rg, 
            cpf: user.cpf,
            postal_code: street.postal_code, 
            state: street.state,
            city: street.city,
            district: street.district,
            street: street.name,
            residence_number: residence.number, 
            role: user.role,
            desired_role: user.desired_role,
            avatar: user.avatar,
        }

        return userInfo
    }
}

export { UserInfoUseCase }