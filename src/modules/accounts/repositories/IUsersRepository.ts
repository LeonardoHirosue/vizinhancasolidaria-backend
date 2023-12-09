import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository{
    create(data: User): Promise<User>;
    list(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    updateUserRole(user_id: string, role:string, desired_role: string): Promise<void>;
    updateAvatar(user_id: string, file_name: string): Promise<void>
}

export { IUsersRepository }