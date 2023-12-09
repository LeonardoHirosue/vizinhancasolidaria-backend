import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("informatives")
class Informative {

    @PrimaryColumn()
    id: string;

    @ManyToOne(() => User, user => user.informatives)
    @JoinColumn({ name: "user_id"})
    user: User;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    url_banner: string;

    @Column()
    url_source: string;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;    
    
    constructor(){
        if(!this.id){
            this.id = uuidV4(); 
        }
    }    
}

export { Informative }