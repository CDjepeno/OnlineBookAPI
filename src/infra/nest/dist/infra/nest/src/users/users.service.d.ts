import { User } from './user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userRepositoy;
    constructor(userRepositoy: Repository<User>);
    createUser(): void;
}
