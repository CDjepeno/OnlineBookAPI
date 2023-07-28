"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserAdapter = exports.provider = void 0;
const AddUser_1 = require("../../../../core/Application/User/UseCase/AddUser/");
const users_service_1 = require("../users/users.service");
exports.provider = new users_service_1.UsersService();
const createUserAdapter = new AddUser_1.AddUser(exports.provider);
//# sourceMappingURL=users.adapter.js.map