import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("notification_types")
class NotificationType {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { NotificationType }