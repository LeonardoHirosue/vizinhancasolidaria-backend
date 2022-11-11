import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { BadRequestError } from "@shared/errors/ApiErrors";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  async execute({
    name,
    birth_date,
    cell,
    email,
    password,
    rg,
    cpf,
  }: ICreateUserDTO): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new BadRequestError("User already existis!");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      birth_date: new Date(birth_date),
      cell,
      email,
      password: passwordHash,
      rg,
      cpf
    });
  }
}

export { CreateUserUseCase };
