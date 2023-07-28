"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGES = exports.REGEX = void 0;
const PASSWORD_RULE = /^(?=.*?[A-Z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-_]).{8,}$/;
const PASSWORD_RULE_MESSAGE = 'Password should have 1 upper case, lowcase letter along with a number and spécial character.';
exports.REGEX = {
    PASSWORD_RULE,
};
exports.MESSAGES = {
    PASSWORD_RULE_MESSAGE
};
//# sourceMappingURL=utils.js.map