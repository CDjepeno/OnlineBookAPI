export interface IUser {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    created_at?: Date;
    update_at?: Date;
}
export declare class UserDTO implements IUser {
    readonly email: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    id?: number;
    constructor(email: string, password: string, firstName: string, lastName: string);
}
