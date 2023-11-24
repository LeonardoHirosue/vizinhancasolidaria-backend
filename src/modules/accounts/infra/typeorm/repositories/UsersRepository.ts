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
        residence_id,
        name,
        email,
        password,
        birth_date,
        cellphone,
        rg,
        cpf,
        desired_role,   
    }: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            residence_id,
            name,
            email, 
            password, 
            birth_date, 
            cellphone, 
            rg, 
            cpf,
            desired_role
        });   
        
        await this.repository.save(user);

        return user;
    }

    
    async list(): Promise<User[]> {
        return await this.repository.find()
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