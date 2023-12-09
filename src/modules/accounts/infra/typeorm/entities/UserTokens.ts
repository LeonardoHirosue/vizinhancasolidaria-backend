import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { User } from "./User";

@Entity("users_tokens")
class UserTokens {

    @PrimaryColumn()
    id: string;

    @Column()
    refresh_token: string;

    @ManyToOne(() => User, user => user.user_tokens)
    @JoinColumn({ name: "user_id"})
    user: User;

    @Column()
    expires_date: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4()
        }
    }
}

export { UserTokens }