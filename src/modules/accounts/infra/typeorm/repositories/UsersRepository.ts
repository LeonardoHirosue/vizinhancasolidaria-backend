import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

class UsersRepository implements IUsersRepository{

    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User);
    }
        
    async create({
        id,
        name,
        birth_date, 
        cell, 
        email, 
        password, 
        rg, 
        cpf,
        avatar, 
    }: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            id,
            name,
            birth_date, 
            cell, 
            email, 
            password, 
            rg, 
            cpf,
            avatar, 
        });   
        
        await this.repository.save(user);

        return user;
    }
    
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }
}

export { UsersRepository }