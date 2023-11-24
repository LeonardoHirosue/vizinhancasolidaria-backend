import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from  'uuid';

@Entity("cars")
class Car {
    @PrimaryColumn()
    id: string;

    @Column()
    residence_id: string;

    @Column()
    color: string;

    @Column()
    license_plate: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Car }