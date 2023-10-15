interface ICreateInformativeDTO {
    id?: string;
    user_id: string;
    title: string;
    description: string;
    url_banner: string;
    url_source: string;
    start_date: Date;
    end_date: Date;
}

export { ICreateInformativeDTO }