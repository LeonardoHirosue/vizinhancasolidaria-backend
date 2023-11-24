interface ICreateUserDTO{
    id?: string;
    residence_id: string;
    name: string;
    email: string; 
    password: string; 
    birth_date: Date; 
    cellphone: string; 
    rg: string; 
    cpf: string;
    desired_role: string;
    avatar?: string; 
}

export { ICreateUserDTO }