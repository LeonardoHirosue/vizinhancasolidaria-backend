import { inject, injectable } from "tsyringe";

import { INotificationsRepository } from "@modules/notifications/repositories/INotificationsRepository";

interface IResponse{
    id: string;
    type_id: string;
    status: string;
    title: string;
    description: string;
    license_plate?: string;
}

@injectable()
class ListUserNotificationsUseCase {

    constructor(
        @inject("NotificationsRepository")
        private notificationsRepository: INotificationsRepository
    ){}

    async execute(user_id: string): Promise<IResponse[]>{
        const notifications = await this.notificationsRepository.list(user_id)

        const notificationsReturn: IResponse[] = notifications.map(notification => {
            return({
                id: notification.id,
                type_id: notification.type_id,
                status: notification.status,
                title: notification.title,
                description: notification.description,
                license_plate: notification.license_plate
            });
        });

        return notificationsReturn;
    }   
}

export { ListUserNotificationsUseCase }