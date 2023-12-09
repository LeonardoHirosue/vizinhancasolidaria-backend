import { inject, injectable } from "tsyringe";

import { ICreateNotificationDTO, Status } from "@modules/notifications/dtos/ICreateNotificationDTO";
import { INotificationsRepository } from "@modules/notifications/repositories/INotificationsRepository";
import { Notification } from "@modules/notifications/infra/typeorm/entities/Notification";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { INotificationTypesRepository } from "@modules/notificationTypes/repositories/INotificationTypesRepository";

@injectable()
class CreateNotificationUseCase {

    constructor(
        @inject("NotificationsRepository")
        private notificationsRepository: INotificationsRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("NotificationTypesRepository")
        private notificationTypesRepository: INotificationTypesRepository
    ){}

    
    async execute({
        user_id,
        type_id,
        description, 
        license_plate,
    }: ICreateNotificationDTO): Promise<Notification>{

        const user = await this.usersRepository.findById(user_id)
        console.log("CREATE NOTIFICATION USE CASE USER",user)

        const type = await this.notificationTypesRepository.findById(type_id)
        console.log("CREATE NOTIFICATION USE CASE TYPE",type)

        const notification = await this.notificationsRepository.create({
            user,
            type,
            description,
            license_plate,
        });

        return notification;
    }
}

export { CreateNotificationUseCase }