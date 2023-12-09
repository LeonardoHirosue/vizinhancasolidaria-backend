import { inject, injectable } from "tsyringe";

import { INotificationsRepository } from "@modules/notifications/repositories/INotificationsRepository";
import { Notification } from "@modules/notifications/infra/typeorm/entities/Notification";

@injectable()
class ListUserNotificationsUseCase {

    constructor(
        @inject("NotificationsRepository")
        private notificationsRepository: INotificationsRepository
    ){}

    async execute(): Promise<Notification[]>{
        const notifications = await this.notificationsRepository.list()

        return notifications;
    }   
}

export { ListUserNotificationsUseCase }