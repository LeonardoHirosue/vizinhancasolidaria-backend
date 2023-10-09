import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { NotFoundError, UnauthorizedError } from "@shared/errors/ApiErrors";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import auth from "@config/auth";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  const userTokensRepository = new UsersTokensRepository();

  if (!authHeader) {
    throw new UnauthorizedError("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      auth.secret_refresh_token
    ) as IPayload;

    const user = await userTokensRepository.findByUserIdAndRefreshToken(user_id, token);

    if (!user) {
      throw new NotFoundError("User does not exists!");
    }

    request.user = {
      id: user_id
    };

    next();
  } catch (error) {
    throw new UnauthorizedError("Invalid token!");
  }
}
