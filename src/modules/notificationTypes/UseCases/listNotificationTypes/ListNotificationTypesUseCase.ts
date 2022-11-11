import { inject, injectable } from "tsyringe";

import { NotificationType } from "@modules/notificationTypes/infra/typeorm/entities/NotificationType";
import { NotificationTypesRepositoryInMemory } from "@modules/notificationTypes/repositories/in-memory/NotificationTypesRepositoryInMemory";

@injectable()
class ListNotificationTypesUseCase {

    constructor(
        @inject("NotificationTypesRepository")
        private notificationTypesRepository: NotificationTypesRepositoryInMemory
    ){}
    async execute(): Promise<NotificationType[]>{
        const notificationTypes = await this.notificationTypesRepository.list();

        return notificationTypes;
    }
}

export { ListNotificationTypesUseCase }