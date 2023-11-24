import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("pets")
class Pet {
    @PrimaryColumn()
    id: string;

    @Column()
    residence_id: string;

    @Column()
    name: string;

    @Column()
    breed: string;

    @Column()
    description: string;

    @Column()
    url_image: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Pet }