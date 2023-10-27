import { InformativeRepositoryInMemory } from "@modules/informative/repositories/in-memory/InformativeRepositoryInMemory";
import { CreateInformativeUseCase } from "../createInformative/CreateInformativeUseCase";
import { ListInformativesUseCase } from "./ListInformativesUseCase"

let informativeRepositoryInMemory: InformativeRepositoryInMemory;
let createInformativeUseCase: CreateInformativeUseCase;
let listInformativeUseCase: ListInformativesUseCase;

describe("List Informative", () => {
    beforeEach(() => {
        informativeRepositoryInMemory = new InformativeRepositoryInMemory();
        createInformativeUseCase = new CreateInformativeUseCase(informativeRepositoryInMemory);
        listInformativeUseCase = new ListInformativesUseCase(informativeRepositoryInMemory);
    })

    it("should be able to list all informatives", async () => {
        await createInformativeUseCase.execute({
            user_id: "",
            title: "Novo Informativo",
            description: "Novo Informativo Teste",
            url_banner: "url_banner",
            url_source: "url_source",
            start_date: new Date("10 27 2023"),
            end_date: new Date("10 31 2023"),
        });

        await createInformativeUseCase.execute({
            user_id: "",
            title: "Novo Informativo 2",
            description: "Novo Informativo Teste 2",
            url_banner: "url_banner2",
            url_source: "url_source2",
            start_date: new Date("10 27 2023"),
            end_date: new Date("10 31 2023"),
        });

        const list = await listInformativeUseCase.execute();

        expect(list.length).toEqual(2);
    })
})