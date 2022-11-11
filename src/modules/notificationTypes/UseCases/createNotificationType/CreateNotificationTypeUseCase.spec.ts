
import { NotificationTypesRepositoryInMemory } from "@modules/notificationTypes/repositories/in-memory/NotificationTypesRepositoryInMemory";
import { CreateNotificationTypeUseCase } from "./CreateNotificationTypeUseCase"

let createNotificationTypeUseCase: CreateNotificationTypeUseCase;
let notificationTypesRepositoryInMemory: NotificationTypesRepositoryInMemory;

describe("Create notification type", () => {
    beforeEach(() => {
        notificationTypesRepositoryInMemory = new NotificationTypesRepositoryInMemory();
        createNotificationTypeUseCase = new CreateNotificationTypeUseCase(notificationTypesRepositoryInMemory);
    });

    it("should be able to create a new notification type", async () => {
        const notificationType = await createNotificationTypeUseCase.execute("PET desaparecido");
        
        expect(notificationType).toHaveProperty("id");
    });
})