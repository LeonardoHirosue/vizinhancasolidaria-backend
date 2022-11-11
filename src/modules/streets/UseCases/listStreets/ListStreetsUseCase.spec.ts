import { StreetsRepositoryInMemory } from "@modules/streets/repositories/in-memory/StreetsRepositoryInMemory"
import { CreateStreetUseCase } from "../createStreet/CreateStreetUseCase";
import { ListStreetsUseCase } from "./ListStreetsUseCase";

let streetsRepositoryInMemory: StreetsRepositoryInMemory;
let createStreetsUseCase: CreateStreetUseCase;
let listStreetUseCase: ListStreetsUseCase;

describe("List streets", () => {
    beforeEach(() => {
        streetsRepositoryInMemory = new StreetsRepositoryInMemory();
        createStreetsUseCase = new CreateStreetUseCase(streetsRepositoryInMemory);
        listStreetUseCase = new ListStreetsUseCase(streetsRepositoryInMemory);
    });

    it("should be able to list all streets", async () => {
        await createStreetsUseCase.execute({
            name: "Rua 1",
            country: "Brasil",
            state: "SP",
            city:"Cidade teste",
            district: "Bairro teste",
            postal_code: "12345-678"
        });

        await createStreetsUseCase.execute({
            name: "Rua 2",
            country: "Brasil",
            state: "SP",
            city:"Cidade teste",
            district: "Bairro teste",
            postal_code: "12345-678"
        });

        await createStreetsUseCase.execute({
            name: "Rua 3",
            country: "Brasil",
            state: "SP",
            city:"Cidade teste",
            district: "Bairro teste",
            postal_code: "12345-678"
        });

        const list = await listStreetUseCase.execute();

        expect(list.length).toEqual(3);
    });
})