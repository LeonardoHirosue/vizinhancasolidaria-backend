import { Residence } from "@modules/residences/infra/typeorm/entities/Residence";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("streets")
class Street{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    district: string;

    @Column()
    postal_code: string;

    @Column()
    state: string;

    @Column()
    city: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Residence, residence => residence.street)
    residences: Residence[];

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Street }