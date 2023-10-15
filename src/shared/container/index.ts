import { container } from "tsyringe";

import "@shared/container/providers";

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
import { IGroupsStreetsRepository } from "@modules/groupsStreets/repositories/IGroupsStreetsRepository";
import { GroupsStreetsRepository } from "@modules/groupsStreets/infra/typeorm/repositories/GroupsStreetsRepository";
import { IResidencesRepository } from "@modules/residences/repositories/IResidencesRepository";
import { ResidencesRepository } from "@modules/residences/infra/typeorm/repositories/ResidencesRepository";
import { IUsersResidencesRepository } from "@modules/usersResidences/repositories/IUsersResidencesRepository";
import { UsersResidencesRepository } from "@modules/usersResidences/infra/typeorm/repositories/UsersResidencesRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import { IPetsRepository } from "@modules/pets/repositories/IPetsRepository";
import { PetsRepository } from "@modules/pets/infra/typeorm/repositories/PetsRepository";
import { IInformativeRepository } from "@modules/informative/repositories/IInformativeRepository";
import { InformativeRepository } from "@modules/informative/infra/typeorm/repositories/InformativeRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";

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

container.registerSingleton<IGroupsStreetsRepository>(
    "GroupsStreetsRepository",
    GroupsStreetsRepository
);

container.registerSingleton<IResidencesRepository>(
    "ResidencesRepository",
    ResidencesRepository
);

container.registerSingleton<IUsersResidencesRepository>(
    "UsersResidencesRepository",
    UsersResidencesRepository
);

container.registerSingleton<ICarsRepository>(
    "CarsRepository",
    CarsRepository
);

container.registerSingleton<IPetsRepository>(
    "PetsRepository",
    PetsRepository
);

container.registerSingleton<IInformativeRepository>(
    "InformativeRepository",
    InformativeRepository
);

container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    UsersTokensRepository
);