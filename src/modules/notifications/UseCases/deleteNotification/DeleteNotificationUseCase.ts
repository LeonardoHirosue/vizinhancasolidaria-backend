import { inject, injectable } from "tsyringe";

import { NotFoundError } from "@shared/errors/ApiErrors";
import { INotificationsRepository } from "@modules/notifications/repositories/INotificationsRepository";

@injectable()
class DeleteNotificationUseCase {
    constructor(
        @inject("NotificationsRepository")
        private repository: INotificationsRepository
    ){}

    async execute(id: string): Promise<void>{
        const notification = this.repository.findById(id);

        if (!notification) {
            throw new NotFoundError("Notification not founded!");            
        }

        await this.repository.delete(id);
    }
}

export { DeleteNotificationUseCase }