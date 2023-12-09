import { Street } from "@modules/streets/infra/typeorm/entities/Street";

interface ICreateResidenceDTO {
    id?: string;
    street: Street;
    number: number;
}

export { ICreateResidenceDTO }