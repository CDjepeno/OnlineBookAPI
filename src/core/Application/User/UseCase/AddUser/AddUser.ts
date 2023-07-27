import { UserDTO } from ''
import { IUserRepository } from ''
import { AddUserResponse } from ''

export class AddUser {
    constructor(private repository: IUserRepository) {}

    async execute(request: UserDTO) {
        try {
            const response = new AddUserResponse()

            const user = new UserDTO(
                request.email,
                request.password,
                request.firstName,
                request.lastName
            )

            await this.repository.addUser(user)

            response.message = 'Le user a bien été ajouté'
            return response
        } catch (e: any) {
            throw new Error(e)
        }
    }
}
