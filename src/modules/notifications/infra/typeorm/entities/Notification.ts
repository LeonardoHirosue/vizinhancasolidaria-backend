import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { NotificationType } from "../../../../notificationTypes/infra/typeorm/entities/NotificationType";

enum Status {
    OPENED = "opened", 
    WORKING = "working", 
    CLOSED = "closed"
}

@Entity("notifications")
class Notification {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => NotificationType)
    @JoinColumn({ name: "type_id"})
    notification_type: NotificationType;

    @Column()
    type_id: string;
    
    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    user_id: string;

    @Column({
        type: "enum",
        enum: Status,
    })
    status: Status;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    license_plate: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
            this.status = Status.OPENED;
        }
    }
}

export { Notification }