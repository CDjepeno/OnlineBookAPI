"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUser = void 0;
const User_1 = require("../../../../Entities/User");
const AddUserResponse_1 = require("./AddUserResponse");
class AddUser {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(request) {
        try {
            const response = new AddUserResponse_1.AddUserResponse();
            const user = new User_1.UserDTO(request.email, request.password, request.firstName, request.lastName);
            await this.repository.addUser(user);
            response.message = 'Le user a bien été ajouté';
            return response;
        }
        catch (e) {
            throw new Error(e);
        }
    }
}
exports.AddUser = AddUser;
//# sourceMappingURL=AddUser.js.map