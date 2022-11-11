import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

enum Role {
    UNIDENTIFIED = "unidentified", 
    RESIDENT = "resident", 
    HOST = "host", 
    TUTOR = "tutor"
}

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    birth_date: Date;

    @Column()
    cell: string;

    @Column()
    rg: string;

    @Column()
    cpf: string;

    @Column({
        type: "enum",
        enum: Role,
    })
    user_role: Role;

    @Column()
    isAdmin: Boolean;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
            this.user_role = Role.UNIDENTIFIED;
        }
    }
}

export { User }