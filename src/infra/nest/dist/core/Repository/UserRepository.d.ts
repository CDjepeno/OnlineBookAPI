import { UserDTO } from '../Entities/User';
export interface IUserRepository {
    addUser(user: UserDTO): Promise<string | null>;
    getUser(email: string): Promise<UserDTO>;
    getUsers(): Promise<UserDTO[]>;
    login(email: string): Promise<UserDTO>;
    updateUser(id: number, body: UserDTO): Promise<string>;
    deleteUser(id: number): Promise<string>;
}
