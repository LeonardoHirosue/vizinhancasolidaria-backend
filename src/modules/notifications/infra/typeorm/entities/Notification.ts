import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { NotificationType } from "@modules/notificationTypes/infra/typeorm/entities/NotificationType";

enum Status {
    OPENED = "opened", 
    WORKING = "working", 
    CLOSED = "closed"
}

@Entity("alerts")
class Notification {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => User, user => user.alerts)
    @JoinColumn({name: "user_id"})
    user: User;

    @ManyToOne(() => NotificationType, alert_types => alert_types.alerts)
    @JoinColumn({name: "type_id"})
    type: NotificationType;

    @Column({
        type: "enum",
        enum: Status,
    })
    status: Status;

    @Column()
    description: string;

    @Column({
        nullable: true
    })
    license_plate: string;

    @Column({
        nullable: true
    })
    image: string;

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