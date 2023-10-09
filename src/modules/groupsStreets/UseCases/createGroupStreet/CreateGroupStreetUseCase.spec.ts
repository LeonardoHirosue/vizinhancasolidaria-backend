import { GroupsStreetsRepositoryInMemory } from "@modules/groupsStreets/repositories/in-memory/GroupsStreetsRepositoryInMemory";
import { CreateGroupStreetUseCase } from "./CreateGroupStreetUseCase";

let createGroupStreetUseCase: CreateGroupStreetUseCase;
let groupsStreetsRepositoryInMemory: GroupsStreetsRepositoryInMemory;

describe("Create Group-Street", () => {
    beforeEach(() => {
        groupsStreetsRepositoryInMemory = new GroupsStreetsRepositoryInMemory();
        createGroupStreetUseCase = new CreateGroupStreetUseCase(groupsStreetsRepositoryInMemory);
    })

    it("should be able to create a new group-street", async () => {
        await createGroupStreetUseCase.execute({
            group_id: "group-uuid",
            street_id: "street-uuid",
            start_number: 1,
            end_number: 100
        });
    })
})