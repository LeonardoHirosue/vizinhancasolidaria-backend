import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Residence } from "@modules/residences/infra/typeorm/entities/Residence";
import { Informative } from "@modules/informative/infra/typeorm/entities/Informative";
import { Notification } from "@modules/notifications/infra/typeorm/entities/Notification";
import { UserTokens } from "./UserTokens";

enum Role {
    UNIDENTIFIED = "Não identificado(a)", 
    RESIDENT = "Morador(a)",
    HOST = "Anfitriã(o)", 
    TUTOR = "Tutor(a)",
    ADMIN = "Administrador(a)"
}

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Residence, residence => residence.users)
    @JoinColumn({ name: 'residence_id'})
    residence: Residence;

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

    @Column({
        nullable:true,
    })
    avatar: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Informative, informative => informative.user)
    informatives: Informative[];

    @OneToMany(() => Notification, alert => alert.user)
    alerts: Notification[];

    @OneToMany(() => UserTokens, user_tokens => user_tokens.user)
    user_tokens: UserTokens[];

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
            this.role = Role.UNIDENTIFIED;
        }
    }
}

export { User }