import { Repository, getRepository } from "typeorm";

import { INotificationTypesRepository } from "@modules/notificationTypes/repositories/INotificationTypesRepository";
import { NotificationType } from "../entities/NotificationType";

class NotificationTypesRepository implements INotificationTypesRepository{
    
    private repository: Repository<NotificationType>;

    constructor(){
        this.repository = getRepository(NotificationType);
    }
    
    async create(name: string, label: string): Promise<NotificationType> {
        const notificationType = this.repository.create({
            name,
            label
        });
        
        await this.repository.save(notificationType);
        
        return notificationType;
    }
    
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
    
    async findById(id: string): Promise<NotificationType> {      
        return await this.repository.findOne(id);
    }

    async list(): Promise<NotificationType[]> {
        return this.repository.find();
    }
}

export { NotificationTypesRepository }