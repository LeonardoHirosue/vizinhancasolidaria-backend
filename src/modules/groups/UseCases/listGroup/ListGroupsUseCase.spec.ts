import { GroupsRepositoryInMemory } from "@modules/groups/repositories/in-memory/GroupsRepositoryInMemory"
import { CreateGroupUseCase } from "../createGroup/CreateGroupUseCase";
import { ListGroupsUseCase } from "./ListGroupsUseCase";

let groupsRepositoryInMemory: GroupsRepositoryInMemory;
let createGroupUseCase: CreateGroupUseCase;
let listGroupsUseCase: ListGroupsUseCase;

describe("List group", () => {
    beforeEach(() => {
        groupsRepositoryInMemory = new GroupsRepositoryInMemory();
        createGroupUseCase = new CreateGroupUseCase(groupsRepositoryInMemory);
        listGroupsUseCase = new ListGroupsUseCase(groupsRepositoryInMemory);
    });

    it("should be able to list all groups", async() => {
        await createGroupUseCase.execute({
            name: "Grupo 1",
            whatsapp_url: "https://chat.whatsapp.com/Grupo1"
        });

        await createGroupUseCase.execute({
            name: "Grupo 2",
            whatsapp_url: "https://chat.whatsapp.com/Grupo2"
        });

        await createGroupUseCase.execute({
            name: "Grupo 3",
            whatsapp_url: "https://chat.whatsapp.com/Grupo3"
        });

        const groups = await listGroupsUseCase.execute();

        expect(groups.length).toEqual(3);
    })
})