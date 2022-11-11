enum Status{
    OPENED = "opened", 
    WORKING = "working", 
    CLOSED = "closed"
}

interface ICreateNotificationDTO {
    id?: string;
    user_id: string;
    type_id: string;
    status?: Status;
    title: string;
    description: string;
    license_plate?: string;
}

export { ICreateNotificationDTO, Status }