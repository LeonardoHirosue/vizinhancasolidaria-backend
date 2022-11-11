import { BadRequestError } from "@shared/errors/ApiErrors";
import { StreetsRepositoryInMemory } from "@modules/streets/repositories/in-memory/StreetsRepositoryInMemory"
import { CreateStreetUseCase } from "./CreateStreetUseCase";

let streetsRepositoryInMemory: StreetsRepositoryInMemory;
let createStreetUseCase: CreateStreetUseCase;

describe("Create street", () => {
    beforeEach(() => {
        streetsRepositoryInMemory = new StreetsRepositoryInMemory();
        createStreetUseCase = new CreateStreetUseCase(streetsRepositoryInMemory);
    });

    it("should be able to create a new street", async () => {
        const street = await createStreetUseCase.execute({ 
            name: "Rua Porfírio Flora",
            country: "Brasil", 
            state:"SP",
            city: "Piedade", 
            district: "Nova Olinda", 
            postal_code: "18170-000" 
        });

        expect(street).toHaveProperty("id");
    });

    it("should not be able to create a street with same name", () => {
        expect(async () => { 
            await createStreetUseCase.execute({ 
                name: "Rua Porfírio Flora",
                country: "Brasil", 
                state:"SP",
                city: "Piedade", 
                district: "Nova Olinda", 
                postal_code: "18170-000" 
            });

            await createStreetUseCase.execute({ 
                name: "Rua Porfírio Flora",
                country: "Brasil", 
                state:"SP",
                city: "Piedade", 
                district: "Nova Olinda", 
                postal_code: "18170-000" 
            });
        }).rejects.toBeInstanceOf(BadRequestError);
    })
})