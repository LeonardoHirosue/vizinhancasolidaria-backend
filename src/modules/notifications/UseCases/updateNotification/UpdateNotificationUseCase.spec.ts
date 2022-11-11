import { v4 as uuidV4 } from "uuid";

import { NotificationsRepositoryInMemory } from "@modules/notifications/repositories/in-memory/NotificationsRepositoryInMemory"
import { CreateNotificationUseCase } from "../createNotification/CreateNotificationUseCase";
import { UpdateNotificationUseCase } from "./UpdateNotificationUseCase";
import { Status } from "@modules/notifications/dtos/ICreateNotificationDTO";

let notificationsRepository: NotificationsRepositoryInMemory;
let createNotificationUseCase: CreateNotificationUseCase;
let updateNotificationUseCase: UpdateNotificationUseCase;

describe("Update notification", () => {
    beforeEach(() => {
        notificationsRepository = new NotificationsRepositoryInMemory();
        createNotificationUseCase = new CreateNotificationUseCase(notificationsRepository);
        updateNotificationUseCase = new UpdateNotificationUseCase(notificationsRepository);
    });

    it("should be able to update notification's status", async () => {
        const notification = await createNotificationUseCase.execute({
            user_id: uuidV4(),
            type_id: uuidV4(),
            title: "Notification Test",
            description: "Description Test",
            license_plate: "ABC-1234",
        });

        await updateNotificationUseCase.execute(
            notification.id,
            "working" as Status
        );

        expect(notification.status).toEqual("working");
    });
})