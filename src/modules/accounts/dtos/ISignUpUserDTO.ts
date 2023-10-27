interface ISignUpUserDTO {
    id?: string;
    name: string;
    birth_date: Date; 
    cell: string; 
    email: string; 
    password: string; 
    rg: string; 
    cpf: string;
    postal_code: string; 
    state: string;
    city: string;
    district: string;
    street: string;
    residence_number: number; 
    role: string;
    avatar?: string;
}

export { ISignUpUserDTO }