import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Residence } from "@modules/residences/infra/typeorm/entities/Residence";

@Entity("users_residences")
class UserResidence {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    user_id: string;

    @ManyToOne(() => Residence)
    @JoinColumn({ name: "residence_id"})
    residence: Residence;

    @Column()
    residence_id: string;

    constructor(){
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { UserResidence }