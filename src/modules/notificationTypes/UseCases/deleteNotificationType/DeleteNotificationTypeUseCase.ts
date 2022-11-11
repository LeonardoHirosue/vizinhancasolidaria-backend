import { inject, injectable } from "tsyringe";

import { NotFoundError } from "@shared/errors/ApiErrors";
import { INotificationTypesRepository } from "@modules/notificationTypes/repositories/INotificationTypesRepository";

@injectable()
class DeleteNotificationTypeUseCase{
    
    constructor(
        @inject("NotificationTypesRepository")
        private notificationTypesRepository: INotificationTypesRepository
    ){}

    async execute(id: string): Promise<void>{
        const notificationType = await this.notificationTypesRepository.findById(id);

        if (!notificationType) {
            throw new NotFoundError("Notification type not exists.");
        }

        await this.notificationTypesRepository.delete(id);
    }
}

export { DeleteNotificationTypeUseCase }