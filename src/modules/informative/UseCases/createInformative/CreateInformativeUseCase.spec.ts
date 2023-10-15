import { IInformativeRepository } from "@modules/informative/repositories/IInformativeRepository";
import { InformativeRepositoryInMemory } from "@modules/informative/repositories/in-memory/InformativeRepositoryInMemory";

import { CreateInformativeUseCase } from "./CreateInformativeUseCase"

let informativeRepositoryInMemory: IInformativeRepository
let createInformativeUseCase: CreateInformativeUseCase;

describe("Create Informative", () => {
    beforeEach(() => {
        informativeRepositoryInMemory = new InformativeRepositoryInMemory()
        createInformativeUseCase = new CreateInformativeUseCase(informativeRepositoryInMemory);
    })

    it("should be able to create a new informative", async () => {
        const informative = await createInformativeUseCase.execute({
            user_id: "user-uuid",
            title: "Title",
            description: "Informative description",
            url_banner: "Banner URL",
            url_source: "Source URL",
            start_date: new Date("14 10 2023"),
            end_date: new Date("12 11 2023"),
        });

        expect(informative).toHaveProperty("id");
    });
})