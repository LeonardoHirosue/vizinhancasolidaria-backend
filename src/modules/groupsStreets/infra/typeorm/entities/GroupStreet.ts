import { v4 as uuidV4 } from "uuid";

class GroupStreet {
    
    id: string;

    group_id: string;

    street_id: string;

    start_number: number;

    end_number: number;

    updated_at: Date;

    created_at: Date;

    constructor(){
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { GroupStreet }