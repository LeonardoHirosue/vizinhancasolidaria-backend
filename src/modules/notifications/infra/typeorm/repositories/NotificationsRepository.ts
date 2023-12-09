import { getRepository, Repository } from "typeorm";

import { ICreateNotificationDTO } from "@modules/notifications/dtos/ICreateNotificationDTO";
import { Notification } from "@modules/notifications/infra/typeorm/entities/Notification"
import { INotificationsRepository } from "@modules/notifications/repositories/INotificationsRepository";

class NotificationsRepository implements INotificationsRepository{

    private repository: Repository<Notification>;

    constructor(){
        this.repository = getRepository(Notification);
    }
    
    async create({ 
        user,
        type,
        description,
        license_plate,
    }: Notification): Promise<Notification> {
        const notification = this.repository.create({
            user,
            type,
            description,
            license_plate
        });
        
        await this.repository.save(notification);

        return notification;
    }
    
    async list(): Promise<Notification[]> {
        return await this.repository.find({ relations: { type: true }})
        // return notifications;
    }

    async findById(id: string): Promise<Notification> {
        const notification = await this.repository.findOneBy({id:id});
        return notification;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

export { NotificationsRepository }