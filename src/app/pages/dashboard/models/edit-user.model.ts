export interface EditUserRequest{
    firstName : string;
    lastName : string;
    email : string;
    roleId : string;
    phone : string;
    userName :string;
    password : string;
    Permissions : Permission[];
}
interface Permission{
    permissionId : string;
    isReadable? : boolean;
    isWritable? : boolean;
    isDeletable? : boolean;
}