import { ISignUpUserDTO } from "@modules/accounts/dtos/ISignUpUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { GroupsRepositoryInMemory } from "@modules/groups/repositories/in-memory/GroupsRepositoryInMemory";
import { GroupsStreetsRepositoryInMemory } from "@modules/groupsStreets/repositories/in-memory/GroupsStreetsRepositoryInMemory";
import { ResidencesRepositoryInMemory } from "@modules/residences/repositories/in-memory/ResidencesRepositoryInMemory";
import { StreetsRepositoryInMemory } from "@modules/streets/repositories/in-memory/StreetsRepositoryInMemory";
import { UsersResidencesRepositoryInMemory } from "@modules/usersResidences/repositories/in-memory/UsersResidencesRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { ApiError } from "@shared/errors/ApiErrors";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let authenticateUserUseCase: AuthenticateUserUseCase;

let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersResidencesRepositoryInMemory: UsersResidencesRepositoryInMemory;
let residencesRepositoryInMemory: ResidencesRepositoryInMemory;
let streetsRepositoryInMemory: StreetsRepositoryInMemory;
let groupsRepositoryInMemory: GroupsRepositoryInMemory;
let groupsStreetsRepositoryInMemory: GroupsStreetsRepositoryInMemory;

let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory
let dateProvider: DayjsDateProvider;


let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        usersResidencesRepositoryInMemory = new UsersResidencesRepositoryInMemory();
        residencesRepositoryInMemory = new ResidencesRepositoryInMemory();
        streetsRepositoryInMemory = new StreetsRepositoryInMemory();
        groupsRepositoryInMemory = new GroupsRepositoryInMemory();
        groupsStreetsRepositoryInMemory = new GroupsStreetsRepositoryInMemory();
        usersTokensRepositoryInMemory= new UsersTokensRepositoryInMemory();
        dateProvider = new DayjsDateProvider();
        authenticateUserUseCase = new AuthenticateUserUseCase(
            usersRepositoryInMemory,
            usersTokensRepositoryInMemory,
            dateProvider
        );
        createUserUseCase = new CreateUserUseCase(
            usersRepositoryInMemory,
            usersResidencesRepositoryInMemory,
            residencesRepositoryInMemory,
            streetsRepositoryInMemory,
            groupsRepositoryInMemory,
            groupsStreetsRepositoryInMemory
        );
    })

    it("should be able to authenticate an user", async () => {
        const user: ISignUpUserDTO = {
            name: "User Test",
            birth_date: new Date("01 12 2001"),
            cell: "+55 15 99999-9999",
            email: "user.test@sample.com",
            password: "123456",
            rg: "33.857.196-6",
            cpf: "020.312.250-06",
            role: "host",
            postal_code: "18170-000",
            state: "SP",
            city: "Piedade",
            district: "Nova Olinda",
            street: "Rua Porfírio Flora",
            residence_number: 222
        };

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        });

        expect(result).toHaveProperty("token");
    });

    it("should not be able to authenticate a nonexistent user", () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "123456"
            });
        }).rejects.toBeInstanceOf(ApiError);
    });

    it("should not be able to authenticate with incorrect password", () => {
        expect(async () => {
            const user: ISignUpUserDTO = {
                name: "User Test",
                birth_date: new Date("01 12 2001"),
                cell: "+55 15 99999-9999",
                email: "user.test@sample.com",
                password: "123456",
                rg: "33.857.196-6",
                cpf: "020.312.250-06",
                role: "host",
                postal_code: "18170-000",
                state: "SP",
                city: "Piedade",
                district: "Nova Olinda",
                street: "Rua Porfírio Flora",
                residence_number: 222
            };

            await createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "false password"
            });
        }).rejects.toBeInstanceOf(ApiError);
    });
})