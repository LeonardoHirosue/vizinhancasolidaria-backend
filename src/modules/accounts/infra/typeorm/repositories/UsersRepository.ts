import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

enum Role {
    UNIDENTIFIED = "Não identificado(a)", 
    RESIDENT = "Morador(a)",
    HOST = "Anfitriã(o)", 
    TUTOR = "Tutor(a)",
    ADMIN = "Administrador(a)"
}

class UsersRepository implements IUsersRepository{

    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User);
    }

    async updateUserRole(user_id: string, role: Role, desired_role: Role): Promise<void> {
        this.repository.update(user_id, { role: role, desired_role: desired_role});
    }

    async updateAvatar(user_id: string, file_name: string): Promise<void> {
        this.repository.update(user_id, { avatar: file_name});
    }
        
    async create({
        residence,
        name,
        email,
        password,
        birth_date,
        cellphone,
        rg,
        cpf,
        desired_role,
        role   
    }: User): Promise<User> {
        const user = this.repository.create({
            residence,
            name,
            email, 
            password, 
            birth_date, 
            cellphone, 
            rg, 
            cpf,
            desired_role,
            role
        });   
    
        await this.repository.save(user);

        return user;
    }

    async list(): Promise<User[]> {
        return await this.repository.find({
             relations: { 
                residence: { 
                    street: true
                } 
            }
        })
    }
    
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({
            where :{
                email
            }
        });
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({
            where: {
                id: id,
            },
            relations: {
                residence: {
                    street: true,
                    pets: true,
                    users: true,
                    cars: true
                },
            },
        });
        return user;
    }
}

export { UsersRepository }