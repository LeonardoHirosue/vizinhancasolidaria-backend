import { NotFoundError } from "@shared/errors/ApiErrors";

import { NotificationTypesRepositoryInMemory } from "@modules/notificationTypes/repositories/in-memory/NotificationTypesRepositoryInMemory";
import { CreateNotificationTypeUseCase } from "../createNotificationType/CreateNotificationTypeUseCase";
import { DeleteNotificationTypeUseCase } from "./DeleteNotificationTypeUseCase"

let createNotificationTypeUseCase: CreateNotificationTypeUseCase;
let deleteNotificationTypeUseCase: DeleteNotificationTypeUseCase;
let notificationTypesRepositoryInMemory: NotificationTypesRepositoryInMemory;

describe("Delete notification type", () => {
    beforeEach(() => {
        notificationTypesRepositoryInMemory = new NotificationTypesRepositoryInMemory();
        createNotificationTypeUseCase = new CreateNotificationTypeUseCase(notificationTypesRepositoryInMemory);
        deleteNotificationTypeUseCase = new DeleteNotificationTypeUseCase(notificationTypesRepositoryInMemory);
    });

    it("should be able to delete a notification type", async () => {        
        expect(async () => {
                const notificationType = await createNotificationTypeUseCase.execute("PET desaparecido");
            
                await deleteNotificationTypeUseCase.execute(notificationType.id);

                const notification = await notificationTypesRepositoryInMemory.findById(notificationType.id);

                if (!notification) {
                    throw new NotFoundError("Notification type not exists!");
                }
            }
        ).rejects.toBeInstanceOf(NotFoundError);
    });

    it("should not be able to delete a nonexists notification type", () => {
        expect(async () => {
            await deleteNotificationTypeUseCase.execute("123456");
        }).rejects.toBeInstanceOf(NotFoundError);
    })
})

