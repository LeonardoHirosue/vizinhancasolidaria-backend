import { NotFoundError } from "@shared/errors/ApiErrors";
import { InformativeRepositoryInMemory } from "@modules/informative/repositories/in-memory/InformativeRepositoryInMemory";
import { CreateInformativeUseCase } from "../createInformative/CreateInformativeUseCase";
import { DeleteInformativeUseCase } from "./DeleteInformativeUseCase"

let informativeRepositoryInMemory: InformativeRepositoryInMemory;
let createInformativeUseCase: CreateInformativeUseCase;
let deleteInformativeUseCase: DeleteInformativeUseCase;

describe("Delete Informative", () => {
    beforeEach(() => {
        informativeRepositoryInMemory = new InformativeRepositoryInMemory();
        createInformativeUseCase = new CreateInformativeUseCase(informativeRepositoryInMemory);
        deleteInformativeUseCase = new DeleteInformativeUseCase(informativeRepositoryInMemory);
    })

    it("should be able to delete informative", async () => {
        expect(async () => {
        const informative = await createInformativeUseCase.execute({
            user_id: "",
            title: "Novo Informativo",
            description: "Novo Informativo Teste",
            url_banner: "url_banner",
            url_source: "url_source",
            start_date: new Date("10 27 2023"),
            end_date: new Date("10 31 2023"),
        });

        deleteInformativeUseCase.execute(informative.id);

        const informativeRemoved = await informativeRepositoryInMemory.findById(informative.id);
    
            if (!informativeRemoved) {
                throw new NotFoundError("Informative not exists");            
            }
        }).rejects.toBeInstanceOf(NotFoundError);
    })
})