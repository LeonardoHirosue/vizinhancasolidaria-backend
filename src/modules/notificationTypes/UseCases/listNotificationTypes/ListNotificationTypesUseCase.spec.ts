import { NotificationTypesRepositoryInMemory } from "@modules/notificationTypes/repositories/in-memory/NotificationTypesRepositoryInMemory";
import { CreateNotificationTypeUseCase } from "../createNotificationType/CreateNotificationTypeUseCase";
import { ListNotificationTypesUseCase } from "./ListNotificationTypesUseCase";

let notificationTypesRepository: NotificationTypesRepositoryInMemory;
let createNotificationTypeUseCase: CreateNotificationTypeUseCase;
let listNotificationTypesUseCase: ListNotificationTypesUseCase;

describe("List notification types", () => {
    beforeEach(() => {
        notificationTypesRepository = new NotificationTypesRepositoryInMemory();
        createNotificationTypeUseCase = new CreateNotificationTypeUseCase(notificationTypesRepository);
        listNotificationTypesUseCase = new ListNotificationTypesUseCase(notificationTypesRepository);
    });

    it("should be able list all notification types", async () => {
        await createNotificationTypeUseCase.execute("Notification Test 1");
        await createNotificationTypeUseCase.execute("Notification Test 2");
        await createNotificationTypeUseCase.execute("Notification Test 3");

        const allNotificationTypes = await listNotificationTypesUseCase.execute();

        expect(allNotificationTypes.length).toEqual(3);
    });
});