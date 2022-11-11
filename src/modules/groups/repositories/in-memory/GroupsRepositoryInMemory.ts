import { ICreateGroupDTO } from "@modules/groups/dtos/ICreateGroupDTO";
import { Group } from "@modules/groups/infra/typeorm/entities/Group";
import { IGroupsRepository } from "../IGroupsRepository";

class GroupsRepositoryInMemory implements IGroupsRepository{
    groups: Group[] =[];
    
    async findByName(name: string): Promise<Group> {
        return this.groups.find((group) => group.name === name);
    }
    
    async create({ name, whatsapp_url }: ICreateGroupDTO): Promise<Group> {
        const group = new Group();
        
        Object.assign(group, ({
            name,
            whatsapp_url
        }));
        
        this.groups.push(group);
        
        return group;
    }
    
    async list(): Promise<Group[]> {
        return this.groups;
    }

    async findById(id: string): Promise<Group> {
        return this.groups.find((group) => group.id === id);
    }

    async delete(id: string): Promise<void> {
        const groupIndex = this.groups.findIndex((group) => group.id === id);

        this.groups.splice(groupIndex, 1);
    }
}

export { GroupsRepositoryInMemory }