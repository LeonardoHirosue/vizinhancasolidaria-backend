import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { BadRequestError, NotFoundError } from "@shared/errors/ApiErrors";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IResidencesRepository } from "@modules/residences/repositories/IResidencesRepository";
import { ISignUpUserDTO } from "@modules/accounts/dtos/ISignUpUserDTO";
import { IStreetsRepository } from "@modules/streets/repositories/IStreetsRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("ResidencesRepository")
    private residencesRepository: IResidencesRepository,
    @inject("StreetsRepository")
    private streetRepository: IStreetsRepository
  ) {}

  async execute({
    name,
    email,
    password,
    cellphone,
    birth_date,
    rg,
    cpf,
    postal_code,
    state,
    city,
    district,
    street,
    residence_number,
    desired_role
  }: ISignUpUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new BadRequestError("User already existis!");
    }

    const passwordHash = await hash(password, 8);

    const streetsFound = await this.streetRepository.findStreet({ 
      name: street, 
      state, 
      city, 
      district, 
      postal_code 
    });

    if(!streetsFound){
      throw new NotFoundError("Street not found");         
    }

    const residenceFound = await this.residencesRepository.findResidence({ 
      street_id:streetsFound.id, 
      number: residence_number 
    });

    if (!residenceFound) {
      const newResidence = await this.residencesRepository.create({
        street_id: streetsFound.id,
        number: residence_number,
      });

      await this.usersRepository.create({
        residence_id: newResidence.id,
        name,
        email,
        password: passwordHash,
        cellphone,
        birth_date: new Date(birth_date),
        rg,
        cpf,
        desired_role,
      });
    } else {
      await this.usersRepository.create({
        residence_id: residenceFound.id,
        name,
        email,
        password: passwordHash,
        cellphone,
        birth_date: new Date(birth_date),
        rg,
        cpf,
        desired_role,  
      });
    }
  }
}

export { CreateUserUseCase };
