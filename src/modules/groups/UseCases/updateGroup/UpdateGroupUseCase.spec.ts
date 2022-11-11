import { GroupsRepositoryInMemory } from "@modules/groups/repositories/in-memory/GroupsRepositoryInMemory"
import { ApiError, NotFoundError } from "@shared/errors/ApiErrors";
import { CreateGroupUseCase } from "../createGroup/CreateGroupUseCase";
import { UpdateGroupUseCase } from "./UpdateGroupUseCase";


let groupsRepositoryInMemory: GroupsRepositoryInMemory;
let createGroupUseCase: CreateGroupUseCase;
let updateGroupUseCase: UpdateGroupUseCase;

describe("Update group", () => {
    beforeEach(() => {
        groupsRepositoryInMemory = new GroupsRepositoryInMemory();
        createGroupUseCase = new CreateGroupUseCase(groupsRepositoryInMemory);
        updateGroupUseCase = new UpdateGroupUseCase(groupsRepositoryInMemory);
    });
    
    it("should not be able to update group if it not exists", () => {
        expect(async () => {
            await updateGroupUseCase.execute({
                id: "123456",
                name: "Group Test",
                whatsapp_url: "https://chat.whatsapp.com/Teste"
            });
        }).rejects.toBeInstanceOf(NotFoundError);
    })

    it("should be able to update group", async () => {
        const group = await createGroupUseCase.execute({
            name: "Group Test",
            whatsapp_url: "https://chat.whatsapp.com/GroupTest"
        });

        await updateGroupUseCase.execute({
            id: group.id,
            name: "Group Test Updated",
            whatsapp_url: "https://chat.whatsapp.com/GroupTestUpdated"
        });

        expect(group.name).toEqual("Group Test Updated");
    });
})