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
        id,
        user_id,
        type_id,
        status, 
        title, 
        description, 
        license_plate 
    }: ICreateNotificationDTO): Promise<Notification> {
        const notification = this.repository.create({
            id,
            user_id,
            type_id,
            status,
            title,
            description,
            license_plate
        });
        
        await this.repository.save(notification);

        return notification;
    }
    
    async list(user_id: string): Promise<Notification[]> {
        const notifications = await this.repository.find({ user_id })
        return notifications;
    }

    async findById(id: string): Promise<Notification> {
        const notification = await this.repository.findOne(id);
        return notification;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

export { NotificationsRepository }