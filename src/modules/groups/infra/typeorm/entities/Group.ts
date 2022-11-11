import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("groups")
class Group {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    whatsapp_url: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Group }