import { NotificationType } from "@modules/notificationTypes/infra/typeorm/entities/NotificationType";

interface INotificationTypesRepository {
    create(name: string): Promise<NotificationType>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<NotificationType>;
    list(): Promise<NotificationType[]>;
}

export { INotificationTypesRepository }