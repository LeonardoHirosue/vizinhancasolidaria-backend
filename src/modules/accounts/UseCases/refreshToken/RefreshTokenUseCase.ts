import { inject, injectable } from "tsyringe"
import { verify, sign } from "jsonwebtoken"

import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository"
import auth from "@config/auth"
import { UnauthorizedError } from "@shared/errors/ApiErrors";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

interface IPayload {
    sub: string;
    email: string;
}

@injectable()
class RefreshTokenUseCase {
    constructor(
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ){}
    
    async execute(token: string): Promise<String> {
        console.log("ENTREI NO USECASE")
        const { email, sub } = verify(token, auth.secret_refresh_token) as IPayload;
        console.log("EMAIL", email)
        console.log("SUB", sub)
        
        const user_id = sub;
        
        console.log("TOKEN", token)
        console.log("USER_ID", user_id)

        const userToken = await this.usersTokensRepository.findByUserIdAndRefreshToken(user_id, token);
        console.log("userToken", userToken)

        if (!userToken) {
            throw new UnauthorizedError("Refresh Token does not exists!");
        }

        await this.usersTokensRepository.deleteById(userToken.id);

        const refresh_token = sign({ email }, auth.secret_refresh_token, {
            subject: sub,
            expiresIn: auth.expires_in_refresh_token,
        });

        const expires_date = this.dateProvider.addDays(auth.expires_refresh_token_days)

        await this.usersTokensRepository.create({
            expires_date,
            refresh_token,
            user_id
        });

        return refresh_token;
    }
}

export { RefreshTokenUseCase }