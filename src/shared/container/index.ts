import { container } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { INotificationsRepository } from "@modules/notifications/repositories/INotificationsRepository";
import { NotificationsRepository } from "@modules/notifications/infra/typeorm/repositories/NotificationsRepository";
import { INotificationTypesRepository } from "@modules/notificationTypes/repositories/INotificationTypesRepository";
import { NotificationTypesRepository } from "@modules/notificationTypes/infra/typeorm/repositories/NotificationTypesRepository";
import { IStreetsRepository } from "@modules/streets/repositories/IStreetsRepository";
import { StreetsRepository } from "@modules/streets/infra/typeorm/repositories/StreetsRepository";
import { IGroupsRepository } from "@modules/groups/repositories/IGroupsRepository";
import { GroupsRepository } from "@modules/groups/infra/typeorm/repositories/GroupsRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<INotificationsRepository>(
    "NotificationsRepository",
    NotificationsRepository
);

container.registerSingleton<INotificationTypesRepository>(
    "NotificationTypesRepository",
    NotificationTypesRepository
);

container.registerSingleton<IStreetsRepository>(
    "StreetsRepository",
    StreetsRepository
);

container.registerSingleton<IGroupsRepository>(
    "GroupsRepository",
    GroupsRepository
);