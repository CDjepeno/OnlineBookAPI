"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserAdapter = exports.provider = void 0;
const AddUser_1 = require("../../../../core/Application/User/UseCase/AddUser/AddUser");
const users_service_1 = require("../../src/users/users.service");
exports.provider = new users_service_1.UsersService();
const addUserAdapter = new AddUser_1.AddUser(exports.provider);
exports.addUserAdapter = addUserAdapter;
//# sourceMappingURL=users.adapter.js.map