import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

enum Role {
    UNIDENTIFIED = "unidentified", 
    RESIDENT = "resident", 
    TUTOR = "tutor",
    ADMIN = "admin"
}

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    residence_id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    birth_date: Date;

    @Column()
    cellphone: string;

    @Column()
    rg: string;

    @Column()
    cpf: string;

    @Column({
        type: "enum",
        enum: Role,
    })
    role: Role;

    @Column({
        type: "enum",
        enum: Role,
    })
    desired_role: Role;

    @Column()
    avatar: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
            this.role = Role.UNIDENTIFIED;
        }
    }
}

export { User }