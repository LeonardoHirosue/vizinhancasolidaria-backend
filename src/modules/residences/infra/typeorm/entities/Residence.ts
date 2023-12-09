import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { Pet } from "@modules/pets/infra/typeorm/entities/Pet";
import { Street } from "@modules/streets/infra/typeorm/entities/Street";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("residences")
class Residence {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Street, street => street.residences)
    @JoinColumn({name: 'street_id'})
    street: Street;

    @Column()
    number: number;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => User, user => user.residence)
    users: User[];

    @OneToMany(() => Pet, pet => pet.residence)
    pets: Pet[];

    @OneToMany(() => Car, car => car.residence)
    cars: Car[];

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Residence }