import { IUserRepository } from '../../../../Repository/UserRepository'
import { GetUserResponse } from './GetUserResponse'

export class GetUser {
    constructor(private repository: IUserRepository) {}

    async execute(request: string) {
        try {
            const response = new GetUserResponse()
            response.user = await this.repository.getUser(request)
            return response.user
        } catch (error: any) {
            throw new Error(error)
        }
    }
}
