interface ICreatePetsDTO {
    id?: string;
    residence_id: string;
    name: string;
    breed: string;
    description?: string;
    url_image?: string;
}

export { ICreatePetsDTO }