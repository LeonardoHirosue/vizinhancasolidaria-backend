import { StreetsRepositoryInMemory } from "@modules/streets/repositories/in-memory/StreetsRepositoryInMemory"
import { NotFoundError } from "@shared/errors/ApiErrors";
import { CreateStreetUseCase } from "../createStreet/CreateStreetUseCase";
import { DeleteStreetUseCase } from "./deleteStreetUseCase";

let streetRepositoryInMemory: StreetsRepositoryInMemory;
let createStreetUseCase: CreateStreetUseCase;
let deleteStreetUseCase: DeleteStreetUseCase;

describe("Delete street", () => {
    beforeEach(() => {
        streetRepositoryInMemory = new StreetsRepositoryInMemory();
        createStreetUseCase = new CreateStreetUseCase(streetRepositoryInMemory);
        deleteStreetUseCase = new DeleteStreetUseCase(streetRepositoryInMemory);
    });

    it("should not be able to delete a street if it not exists", () => {
        expect(async () => {
            await deleteStreetUseCase.execute("123456");
        }).rejects.toBeInstanceOf(NotFoundError);
    });

    it("should be able to delete a streets if it exists", () => {
        expect(async () => {
            const street = await createStreetUseCase.execute({ 
                name: "Rua Porfírio Flora",
                country: "Brasil", 
                state:"SP",
                city: "Piedade", 
                district: "Nova Olinda", 
                postal_code: "18170-000" 
            });
    
            await deleteStreetUseCase.execute(street.id);
    
            const deletedStreet = await streetRepositoryInMemory.findById(street.id);
    
            if (!deletedStreet) {
                throw new NotFoundError("Street not founded");            
            }
        }).rejects.toBeInstanceOf(NotFoundError);
    });
})