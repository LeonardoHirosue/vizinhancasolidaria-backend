import { v4 as uuidV4 } from "uuid";

import { NotificationsRepositoryInMemory } from "@modules/notifications/repositories/in-memory/NotificationsRepositoryInMemory"
import { CreateNotificationUseCase } from "../createNotification/CreateNotificationUseCase";
import { ListUserNotificationsUseCase } from "./ListUserNotificationsUseCase";

let notificationsRepository: NotificationsRepositoryInMemory;
let createNotificationUseCase: CreateNotificationUseCase;
let listUserNotificationsUseCase: ListUserNotificationsUseCase;
let user_id = uuidV4();

describe("List notifications", () => {
    beforeEach(() => {
        notificationsRepository = new NotificationsRepositoryInMemory();
        createNotificationUseCase = new CreateNotificationUseCase(notificationsRepository);
        listUserNotificationsUseCase = new ListUserNotificationsUseCase(notificationsRepository);
    });

    it("should be able to list all user's notification.", async () => {
        await createNotificationUseCase.execute({
            user_id,
            type_id: uuidV4(),
            title: "Titulo 1",
            description: "Description 1",
            license_plate: "ABC-0000"
        });

        await createNotificationUseCase.execute({
            user_id,
            type_id: uuidV4(),
            title: "Titulo 2",
            description: "Description 2",
            license_plate: "ABC-2222"
        });

        await createNotificationUseCase.execute({
            user_id: uuidV4(),
            type_id: uuidV4(),
            title: "Titulo 3",
            description: "Description 3",
            license_plate: "ABC-3333"
        });

        const notificationList = await listUserNotificationsUseCase.execute(user_id);

        expect(notificationList.length).toEqual(2);
    });
});