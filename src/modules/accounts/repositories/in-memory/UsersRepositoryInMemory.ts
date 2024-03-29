import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository{
    users: User[] = [];
  
    async create({
        name,
        email, 
        password, 
        birth_date, 
        cellphone, 
        rg, 
        cpf,
        desired_role,
        avatar, 
    }: ICreateUserDTO): Promise<User> {
        const user = new User();

        Object.assign(user, {
            name,
            email, 
            password, 
            birth_date, 
            cellphone, 
            rg, 
            cpf,
            desired_role,
            avatar, 
        });

        this.users.push(user);

        return user;
    }
   
    async list(): Promise<User[]> {
        throw this.users;
    }

    async findByEmail(email: string): Promise<User> {
        return this.users.find((user) => user.email === email);
    }
   
    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }
}

export { UsersRepositoryInMemory }