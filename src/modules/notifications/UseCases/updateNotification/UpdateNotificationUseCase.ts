import { inject, injectable } from "tsyringe";

import { NotFoundError } from "@shared/errors/ApiErrors";
import { Status } from "@modules/notifications/dtos/ICreateNotificationDTO";
import { INotificationsRepository } from "@modules/notifications/repositories/INotificationsRepository";

interface IResponse{
    id: string;
    status: Status;
}

@injectable()
class UpdateNotificationUseCase {
    
    constructor(
        @inject("NotificationsRepository")
        private notificationsRepository: INotificationsRepository
    ){}

    async execute(id: string, status: Status): Promise<IResponse> {
        const notification = await this.notificationsRepository.findById(id);

        if (!notification) {
            throw new NotFoundError("Notification not founded!");            
        }

        notification.status = status;

        await this.notificationsRepository.create(notification);

        const notificationReturn: IResponse = {
            id: notification.id,
            status: notification.status
        }

        return notificationReturn;
    }
}

export { UpdateNotificationUseCase }