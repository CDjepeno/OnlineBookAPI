import { IUserRepository } from '../../../../Repository/UserRepository'
import { LoginResponse } from './LoginResponse';

export class Login {
    constructor(private repository: IUserRepository) {}

    async execute(request: string) {
        try {
            const response = new LoginResponse()
            response.user = await this.repository.login(request)
            return response.user
        } catch (error: any) {
            throw new Error(error)
        }
    }
}
