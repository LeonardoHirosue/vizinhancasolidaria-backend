import { ResidencesRepositoryInMemory } from "@modules/residences/repositories/in-memory/ResidencesRepositoryInMemory";
import { CreateResidenceUseCase } from "./CreateResidenceUseCase"

let createResidenceUseCase: CreateResidenceUseCase;
let residencesRepositoryInMemory: ResidencesRepositoryInMemory;

describe("Create Residence", () => {
    beforeEach(() => {
        residencesRepositoryInMemory = new ResidencesRepositoryInMemory()
        createResidenceUseCase = new CreateResidenceUseCase(residencesRepositoryInMemory);
    })

    it("should be able to create a new residence", async () => {
        await createResidenceUseCase.execute({
            number: 222,
            street_id: "street-uuid",
        });
    })
})