import { ICreateNotificationDTO } from "@modules/notifications/dtos/ICreateNotificationDTO";
import { Notification } from "@modules/notifications/infra/typeorm/entities/Notification";

interface INotificationsRepository{
    create(data: Notification): Promise<Notification>;
    list(): Promise<Notification[]>;
    findById(id: string): Promise<Notification>;
    delete(id: string): Promise<void>;
}

export { INotificationsRepository }