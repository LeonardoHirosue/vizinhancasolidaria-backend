import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

enum Label {
    ERROR = "error", 
    SUCCESS = "success", 
    WARNING = "warning",
    INFO = "info"
}

@Entity("alert_types")
class NotificationType {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    label: Label;

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

export { NotificationType }