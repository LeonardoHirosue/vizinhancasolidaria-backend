
import { NotificationType } from "@modules/notificationTypes/infra/typeorm/entities/NotificationType";
import { INotificationTypesRepository } from "../INotificationTypesRepository";

class NotificationTypesRepositoryInMemory implements INotificationTypesRepository{
    
    notificationTypes: NotificationType[] = [];
    
    async create(name: string, label: string): Promise<NotificationType> {
        const notificationType = new NotificationType();
        
        Object.assign(notificationType, {
            name,
            label
        })
        
        this.notificationTypes.push(notificationType);
        
        return notificationType;
    }
    
    async delete(id: string): Promise<void> {
        const notificationTypeIndex = this.notificationTypes.findIndex((notificationType) => notificationType.id === id);
        
        this.notificationTypes.splice(notificationTypeIndex, 1);
    }
    
    async findById(id: string): Promise<NotificationType> {
        return this.notificationTypes.find((notificationType) => notificationType.id === id);
    }

    async list(): Promise<NotificationType[]> {
        return this.notificationTypes;
    }
}

export { NotificationTypesRepositoryInMemory }