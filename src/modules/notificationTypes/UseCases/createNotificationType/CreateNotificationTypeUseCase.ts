import { inject, injectable } from "tsyringe";

import { NotificationType } from "@modules/notificationTypes/infra/typeorm/entities/NotificationType";
import { INotificationTypesRepository } from "@modules/notificationTypes/repositories/INotificationTypesRepository";

@injectable()
class CreateNotificationTypeUseCase{

    constructor(
        @inject("NotificationTypesRepository")
        private notificationTypesRepository: INotificationTypesRepository
    ){}

    async execute(name: string, label:string): Promise<NotificationType>{
        const notificationType = this.notificationTypesRepository.create(name, label);

        return notificationType;
    }
}

export { CreateNotificationTypeUseCase }