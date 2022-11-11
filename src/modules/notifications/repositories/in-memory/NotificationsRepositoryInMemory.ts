import { Notification } from "@modules/notifications/infra/typeorm/entities/Notification";
import { ICreateNotificationDTO } from "@modules/notifications/dtos/ICreateNotificationDTO";
import { INotificationsRepository } from "../INotificationsRepository";


class NotificationsRepositoryInMemory implements INotificationsRepository {
    
    notifications: Notification[] = [];

    async findById(id: string): Promise<Notification> {
        const notification = this.notifications.find((notification) => notification.id === id);
        return notification;
    } 

    async list(user_id: string): Promise<Notification[]> {
        const all = this.notifications.filter((notification) => notification.user_id === user_id);
        return all;
    }

    async create({
        user_id,
        type_id,
        title, 
        description, 
        license_plate
    }: ICreateNotificationDTO): Promise<Notification> {
        const notification = new Notification();

        Object.assign(notification, {
            user_id,
            type_id,
            title, 
            description, 
            license_plate
        });

        this.notifications.push(notification);

        return notification;
    }    
    
    async delete(id: string): Promise<void> {
        const notification = this.notifications.findIndex((notification) => notification.id === id);

        this.notifications.splice(notification, 1);
    }        
}

export { NotificationsRepositoryInMemory }