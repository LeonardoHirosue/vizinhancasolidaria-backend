import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("residences")
class Residence {
    @PrimaryColumn()
    id: string;

    @Column()
    street_id: string;

    @Column()
    number: number;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Residence }