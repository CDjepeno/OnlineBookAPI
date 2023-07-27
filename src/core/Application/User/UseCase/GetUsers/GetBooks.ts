import { IUserRepository } from "../../../../Repository/UserRepository";
import { GetUsersResponse } from "./GetUsersResponse";

export class GetUsers {

    constructor(private repository: IUserRepository) {}

    async execute() {
        const response = new GetUsersResponse()
        response.users = await this.repository.getUsers()
        return response
    }
}