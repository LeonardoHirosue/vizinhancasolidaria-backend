import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UnauthorizedError } from "@shared/errors/ApiErrors";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new UnauthorizedError("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "5fe0e5a6da53676e720e0798aa453c67"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new UnauthorizedError("User does not exists!");
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new UnauthorizedError("Invalid token!");
  }
}
