import { inject, injectable } from "tsyringe";

import { ICreateNotificationDTO } from "@modules/notifications/dtos/ICreateNotificationDTO";
import { INotificationsRepository } from "@modules/notifications/repositories/INotificationsRepository";
import { Notification } from "@modules/notifications/infra/typeorm/entities/Notification";

@injectable()
class CreateNotificationUseCase {

    constructor(
        @inject("NotificationsRepository")
        private notificationsRepository: INotificationsRepository
    ){}

    async execute({
        user_id,
        type_id,
        title, 
        description, 
        license_plate
    }: ICreateNotificationDTO): Promise<Notification>{

        const notification = await this.notificationsRepository.create({
            user_id,
            type_id,
            title,
            description,
            license_plate
        });

        return notification;
    }
}

export { CreateNotificationUseCase }