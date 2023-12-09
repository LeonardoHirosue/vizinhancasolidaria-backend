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
    console.log("residence_number",residence_number)
    console.log("email",email)
    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    console.log("userAlreadyExists", userAlreadyExists)
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
    })

    if(!streetsFound){
      throw new NotFoundError("Street not found");         
    }

    const residenceFound = await this.residencesRepository.findResidence({ 
      number: residence_number, 
      street:streetsFound, 
    });

    
    if (!residenceFound) {
      const newResidence = await this.residencesRepository.create({
        street: streetsFound,
        number: residence_number,
      });
      
      const newUser = await this.usersRepository.create({
        residence: newResidence,
        name,
        email,
        password: passwordHash,
        cellphone,
        birth_date: new Date(birth_date),
        rg,
        cpf,
        desired_role,
      });
      console.log("newUser", newUser);
    } 
    else {
      await this.usersRepository.create({
        residence: residenceFound,
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
