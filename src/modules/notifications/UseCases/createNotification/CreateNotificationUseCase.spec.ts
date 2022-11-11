import { v4 as uuidV4 } from "uuid";

import { NotificationsRepositoryInMemory } from "../../repositories/in-memory/NotificationsRepositoryInMemory";
import { CreateNotificationUseCase } from "./CreateNotificationUseCase";

let createNotificationUseCase: CreateNotificationUseCase;
let notificationsRepositoryInMemory: NotificationsRepositoryInMemory;

describe("Create Notification", () => {
  beforeEach(() => {
    notificationsRepositoryInMemory = new NotificationsRepositoryInMemory();
    createNotificationUseCase = new CreateNotificationUseCase(
      notificationsRepositoryInMemory
    );
  });

  it("should be able to create a new notification", async () => {

    const notification = await createNotificationUseCase.execute({
      user_id: uuidV4(),
      type_id: uuidV4(),
      title: "Notification Test",
      description: "Description Test",
      license_plate: "ABC-1234",
    });

    expect(notification).toHaveProperty("id");
  });
});
