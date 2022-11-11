import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("residences")
class Residence {
    @PrimaryColumn()
    id: string;

    // @ManyToOne(() => Street)
    // @JoinColumn({ name: "street_id"})
    // street: Street;
    
    @Column()
    street_id: string;

    // @ManyToOne(() => Group)
    // @JoinColumn({ name: "group_id"})
    // group: Group;

    @Column()
    group_id: string;

    @Column()
    name: string;

    @Column()
    number: string;

    @Column()
    phone: string;

    @Column()
    created_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Residence }