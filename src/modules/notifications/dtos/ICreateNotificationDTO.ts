enum Status{
    OPENED = "opened", 
    WORKING = "working", 
    CLOSED = "closed"
}

// type User = {
//     id: string
// }

// type NotficationType = {
//     id: string
// } 

interface ICreateNotificationDTO {
    id?: string;
    user_id: string;
    type_id: string;
    status?: Status;
    description: string;
    license_plate?: string;
}

export { ICreateNotificationDTO, Status }