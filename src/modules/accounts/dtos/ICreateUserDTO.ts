interface ICreateUserDTO{
    id?: string;
    name: string;
    birth_date: Date; 
    cell: string; 
    email: string; 
    password: string; 
    rg: string; 
    cpf: string;
    avatar?: string; 
}

export { ICreateUserDTO }