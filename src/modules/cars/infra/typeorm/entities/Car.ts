import { Residence } from '@modules/residences/infra/typeorm/entities/Residence';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from  'uuid';

@Entity("cars")
class Car {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Residence, residence => residence.cars)
    @JoinColumn({name: "residence_id"})
    residence: Residence;

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