import { IUserRepository } from "../../../../Repository/UserRepository"
import { DeleteUserResponse } from "./DeleteUserResponse"

export class DeleteUser {
    constructor(private repository: IUserRepository) {}
    
    async execute(request: number) {
        try {
            const response = new DeleteUserResponse()
            await this.repository.deleteUser(request)
            response.message = `Le user a bien été supprimé`
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
}
