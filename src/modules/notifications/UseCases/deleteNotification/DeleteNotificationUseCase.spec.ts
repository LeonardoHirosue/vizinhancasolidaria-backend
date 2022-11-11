import { v4 as uuidV4 } from "uuid";

import { NotFoundError } from "@shared/errors/ApiErrors";
import { NotificationsRepositoryInMemory } from "@modules/notifications/repositories/in-memory/NotificationsRepositoryInMemory";
import { CreateNotificationUseCase } from "../createNotification/CreateNotificationUseCase";
import { DeleteNotificationUseCase } from "./DeleteNotificationUseCase";

let notificationsRepositoryInMemory: NotificationsRepositoryInMemory;
let createNotificationUseCase: CreateNotificationUseCase;
let deleteNotificationUseCase: DeleteNotificationUseCase;

describe("Delete notification",() => {

    beforeEach(() => {
        notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
        createNotificationUseCase = new CreateNotificationUseCase(notificationsRepositoryInMemory);
        deleteNotificationUseCase = new DeleteNotificationUseCase(notificationsRepositoryInMemory);
    });

    it("should be able to delete a notification", () => {
        expect(async () => {
            const notification = await createNotificationUseCase.execute({
                user_id: uuidV4(),
                type_id: uuidV4(),
                title: "Notification Test",
                description: "Description Test",
                license_plate: "ABC-1234",
            });
    
            await deleteNotificationUseCase.execute(notification.id);

            const notificationRemoved = await notificationsRepositoryInMemory.findById(notification.id);
    
            if (!notificationRemoved) {
                throw new NotFoundError("Notification not exists");            
            }
        }).rejects.toBeInstanceOf(NotFoundError);
    });
})