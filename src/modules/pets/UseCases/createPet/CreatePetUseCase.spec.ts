import { PetsRepositoryInMemory } from "@modules/pets/repositories/in-memory/PetsRepositoryInMemory";
import { CreatePetUseCase } from "./CreatePetUseCase"

let petsRepositoryInMemory: PetsRepositoryInMemory;
let createPetUseCase: CreatePetUseCase;

describe("Create Pet", () => {
    beforeEach(() => {
        petsRepositoryInMemory = new PetsRepositoryInMemory()
        createPetUseCase = new CreatePetUseCase(petsRepositoryInMemory);
    });

    it("should be able to create a new Pet", async () => {
        const pet = await createPetUseCase.execute({
            residence_id: "residence-uuid",
            name: "Lilica",
            description:"Cachorro branco com ",
            breed: "viralata",
            url_image: "url_photo"
        });

        expect(pet).toHaveProperty("id");
    });
});