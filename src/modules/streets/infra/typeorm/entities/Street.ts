import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("streets")
class Street{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    state: string;

    @Column()
    city: string;

    @Column()
    district: string;

    @Column()
    postal_code: string;

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Street }