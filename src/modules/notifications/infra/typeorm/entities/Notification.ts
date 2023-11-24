import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

enum Status {
    OPENED = "opened", 
    WORKING = "working", 
    CLOSED = "closed"
}

@Entity("notifications")
class Notification {
    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @Column()
    type_id: string;

    @Column({
        type: "enum",
        enum: Status,
    })
    status: Status;

    @Column()
    description: string;

    @Column()
    license_plate: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
            this.status = Status.OPENED;
        }
    }
}

export { Notification }