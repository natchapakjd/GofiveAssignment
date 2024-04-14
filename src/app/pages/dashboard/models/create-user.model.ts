export interface AddUserRequest{
    id :string
    firstName : string;
    lastName : string;
    email : string;
    roleId : string;
    phone : string;
    username :string;
    password : string;
    permission : Permission[];
}
interface Permission{
    permissionId : string;
    isReadable? : boolean;
    isWritable? : boolean;
    isDeletable? : boolean;
}