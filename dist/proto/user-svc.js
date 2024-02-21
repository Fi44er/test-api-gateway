"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_CONTROLLER_SERVICE_NAME = exports.AuthControllerControllerMethods = exports.USER_CONTROLLER_SERVICE_NAME = exports.UserControllerControllerMethods = exports.USER_PACKAGE_NAME = exports.Role = exports.protobufPackage = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "user";
var Role;
(function (Role) {
    Role[Role["USER"] = 0] = "USER";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Role || (exports.Role = Role = {}));
exports.USER_PACKAGE_NAME = "user";
function UserControllerControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["findOneUser", "deleteUser"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("UserController", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("UserController", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.UserControllerControllerMethods = UserControllerControllerMethods;
exports.USER_CONTROLLER_SERVICE_NAME = "UserController";
function AuthControllerControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["register", "login", "logout", "refreshToken"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("AuthController", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("AuthController", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.AuthControllerControllerMethods = AuthControllerControllerMethods;
exports.AUTH_CONTROLLER_SERVICE_NAME = "AuthController";
//# sourceMappingURL=user-svc.js.map