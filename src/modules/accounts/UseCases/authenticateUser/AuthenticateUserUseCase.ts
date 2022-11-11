import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { UnauthorizedError } from "@shared/errors/ApiErrors";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

interface IRequest{
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}   
    
    async execute({email, password}: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new UnauthorizedError("Email or password incorrect!");            
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new UnauthorizedError("Email or password incorrect!");
        }

        const token = sign({}, "5fe0e5a6da53676e720e0798aa453c67", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        }

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase }