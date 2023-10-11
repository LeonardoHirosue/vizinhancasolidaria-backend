import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Group } from "@modules/groups/infra/typeorm/entities/Group";
import { Street } from "@modules/streets/infra/typeorm/entities/Street";

@Entity("groups_streets")
class GroupStreet {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Group)
    @JoinColumn({ name: "group_id" })
    group: Group;

    @Column()
    group_id: string;

    @ManyToOne(() => Street)
    @JoinColumn({ name: "street_id"})
    street: Street;

    @Column()
    street_id: string;

    @Column()
    start_number: number;

    @Column()
    end_number: number;

    constructor(){
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { GroupStreet }