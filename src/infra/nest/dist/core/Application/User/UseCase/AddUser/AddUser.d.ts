import { UserDTO } from '../../../../Entities/User';
import { IUserRepository } from '../../../../Repository/UserRepository';
import { AddUserResponse } from './AddUserResponse';
export declare class AddUser {
    private repository;
    constructor(repository: IUserRepository);
    execute(request: UserDTO): Promise<AddUserResponse>;
}
