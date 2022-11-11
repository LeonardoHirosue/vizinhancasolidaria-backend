import { BadRequestError } from "@shared/errors/ApiErrors";

import { GroupsRepositoryInMemory } from "../../repositories/in-memory/GroupsRepositoryInMemory"
import { CreateGroupUseCase } from "./CreateGroupUseCase";

let groupsRepositoryInMemory: GroupsRepositoryInMemory;
let createGroupUseCase: CreateGroupUseCase;

describe("Create Group", () => {
    beforeEach(() => {
        groupsRepositoryInMemory = new GroupsRepositoryInMemory();
        createGroupUseCase = new CreateGroupUseCase(groupsRepositoryInMemory);
    });

    it("should be able to create a new group", async () => {
        const group = await createGroupUseCase.execute({
            name: "PVS - Nova Olinda",
            whatsapp_url: "https://chat.whatsapp.com/I3KqZKip3LkCuLMw5XZyCs"
        });

        expect(group).toHaveProperty("id");
    });

    it("should not be able to create a group if it exists", () => {
        expect(async () => {
            await createGroupUseCase.execute({
                name: "PVS - Nova Olinda",
                whatsapp_url: "https://chat.whatsapp.com/I3KqZKip3LkCuLMw5XZyCs"
            });

            await createGroupUseCase.execute({
                name: "PVS - Nova Olinda",
                whatsapp_url: "https://chat.whatsapp.com/I3KqZKip3LkCuLMw5XZyCs"
            });
        }).rejects.toBeInstanceOf(BadRequestError);
    })
})