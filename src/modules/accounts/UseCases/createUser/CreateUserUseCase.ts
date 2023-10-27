import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { BadRequestError } from "@shared/errors/ApiErrors";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IResidencesRepository } from "@modules/residences/repositories/IResidencesRepository";
import { IStreetsRepository } from "@modules/streets/repositories/IStreetsRepository";
import { ISignUpUserDTO } from "@modules/accounts/dtos/ISignUpUserDTO";
import { IUsersResidencesRepository } from "@modules/usersResidences/repositories/IUsersResidencesRepository";
import { IGroupsStreetsRepository } from "@modules/groupsStreets/repositories/IGroupsStreetsRepository";
import { IGroupsRepository } from "@modules/groups/repositories/IGroupsRepository";

@injectable()
class CreateUserUseCase {
  
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("UsersResidencesRepository")
    private usersResidencesRepository: IUsersResidencesRepository,
    @inject("ResidencesRepository")
    private residencesRepository: IResidencesRepository,
    @inject("StreetsRepository")
    private streetsRepository: IStreetsRepository,
    @inject("GroupsRepository")
    private groupsRepository: IGroupsRepository,
    @inject("GroupsStreetsRepository")
    private groupsStreetsRepository: IGroupsStreetsRepository
  ){}

  async execute({
    name, 
    email, 
    password, 
    cell, 
    birth_date, 
    rg, 
    cpf,
    postal_code, 
    state, 
    city, 
    district, 
    street, 
    residence_number, 
    role
  }: ISignUpUserDTO): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new BadRequestError("User already existis!");
    }

    const passwordHash = await hash(password, 8);

    const newUser = await this.usersRepository.create({
      name,
      birth_date: new Date(birth_date),
      cell,
      email,
      password: passwordHash,
      rg,
      cpf,
      role
    });

    const streetAlreadyExists = await this.streetsRepository.findByName(street);

    if(!streetAlreadyExists){
        const newStreet = await this.streetsRepository.create({
        name: street,
        state,
        city,
        district,
        postal_code
      });

      const newGroup = await this.groupsRepository.create({
        name: `PVS - ${district}`,
        whatsapp_url: 'https://chat.whatsapp.com/'
      })

      const newGroupStreet = await this.groupsStreetsRepository.create({
        group_id: newGroup.id,
        street_id: newStreet.id,
        start_number: 1,
        end_number: 9999,
      })

      const newResidence = await this.residencesRepository.create({
        number: residence_number,
        groups_streets_id: newGroupStreet.id
      });
      
      await this.usersResidencesRepository.create({
        user_id: newUser.id,
        residence_id: newResidence.id
      });
    } else {
      const groupStreetAlreadyExists = await this.groupsStreetsRepository.findByStreetId(streetAlreadyExists.id)
  
      const residences = await this.residencesRepository.findAllByGroupStreetId(groupStreetAlreadyExists.id);
  
      const residence = residences.find((residence) => residence.number == residence_number);
  
      await this.usersResidencesRepository.create({
        user_id: newUser.id,
        residence_id: residence.id
      });
    }
  }
}

export { CreateUserUseCase };
