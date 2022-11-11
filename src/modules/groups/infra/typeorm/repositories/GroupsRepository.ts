import { getRepository, Repository } from "typeorm";

import { IGroupsRepository } from "@modules/groups/repositories/IGroupsRepository";
import { Group } from "../entities/Group";
import { ICreateGroupDTO } from "@modules/groups/dtos/ICreateGroupDTO";

class GroupsRepository implements IGroupsRepository{

    private repository: Repository<Group>;
    
    constructor(){
        this.repository = getRepository(Group)
    }

    async create({id, name, whatsapp_url}: ICreateGroupDTO): Promise<Group> {
        const group = this.repository.create({
            id,
            name,
            whatsapp_url
        });

        await this.repository.save(group);

        return group;
    }

    async findByName(name: string): Promise<Group> {
        return await this.repository.findOne({ name });
    }
    
    async list(): Promise<Group[]> {
        return await this.repository.find();
    }

    async findById(id: string): Promise<Group> {
        return await this.repository.findOne(id);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

export { GroupsRepository }