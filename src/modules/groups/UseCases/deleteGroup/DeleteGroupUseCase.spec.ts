import { NotFoundError } from "@shared/errors/ApiErrors";
import { GroupsRepositoryInMemory } from "@modules/groups/repositories/in-memory/GroupsRepositoryInMemory"
import { CreateGroupUseCase } from "../createGroup/CreateGroupUseCase";
import { DeleteGroupUseCase } from "./DeleteGroupUseCase";

let groupsRepositoryInMemory: GroupsRepositoryInMemory;
let createGroupUseCase: CreateGroupUseCase;
let deleteGroupUseCase: DeleteGroupUseCase;

describe("Delete group", () => {
    beforeEach(() => {
        groupsRepositoryInMemory = new GroupsRepositoryInMemory();
        createGroupUseCase = new CreateGroupUseCase(groupsRepositoryInMemory);
        deleteGroupUseCase = new DeleteGroupUseCase(groupsRepositoryInMemory);
    })

    it("should not be able to delete a group if it not exists", () => {
        expect(async () => {
            await deleteGroupUseCase.execute("123456");
        }).rejects.toBeInstanceOf(NotFoundError);
    });

    it("should be able to delete a group", () => {
        expect(async() => {
            const group = await createGroupUseCase.execute({
                name: "Grupo 1",
                whatsapp_url: "https://chat.whatsapp.com/Grupo1"
            });
    
            await deleteGroupUseCase.execute(group.id);
   
            const removedGroup = await groupsRepositoryInMemory.findById(group.id);

            if (!removedGroup) {
                throw new NotFoundError("");                
            }
        }).rejects.toBeInstanceOf(NotFoundError);
    });
})