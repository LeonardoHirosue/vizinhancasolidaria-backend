import { UsersResidencesRepositoryInMemory } from "@modules/usersResidences/repositories/in-memory/UsersResidencesRepositoryInMemory"
import { CreateUserResidenceUseCase } from "./CreateUserResidenceUseCase";

let usersResidencesRepositoryInMemory: UsersResidencesRepositoryInMemory;
let createUserResidenceUseCase: CreateUserResidenceUseCase;

describe("Create User-Residence", () => {
    beforeEach(() => {
        usersResidencesRepositoryInMemory = new UsersResidencesRepositoryInMemory();
        createUserResidenceUseCase = new CreateUserResidenceUseCase(usersResidencesRepositoryInMemory);
    });

    it("should be able to create a user-residence", async () => {
        await createUserResidenceUseCase.execute({
            user_id:"user-uuid",
            residence_id:"residence-uuid",
        })
    })
})