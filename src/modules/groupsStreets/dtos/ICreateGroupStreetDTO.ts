interface ICreateGroupStreetDTO {
    id?: string;
    group_id: string;
    street_id: string;
    start_number: number;
    end_number: number;
}

export { ICreateGroupStreetDTO }