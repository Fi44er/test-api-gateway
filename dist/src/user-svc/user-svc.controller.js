"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSvcController = void 0;
const common_1 = require("@nestjs/common");
const user_agent_decorator_1 = require("../../libs/common/src/decorators/user-agent.decorator");
const user_svc_1 = require("../../proto/user-svc");
const rxjs_1 = require("rxjs");
let UserSvcController = class UserSvcController {
    onModuleInit() {
        this.authClient = this.client.getService(user_svc_1.AUTH_CONTROLLER_SERVICE_NAME);
    }
    login(dto, res, agent) {
        const kHeaders = Object.getOwnPropertySymbols(res["req"]).find(symbol => symbol.toString() === "Symbol(kHeaders)");
        const cookie = res["req"][kHeaders].cookie;
        return this.authClient.login({ dto, cookie, agent });
    }
};
exports.UserSvcController = UserSvcController;
__decorate([
    (0, common_1.Inject)(user_svc_1.USER_CONTROLLER_SERVICE_NAME),
    __metadata("design:type", Object)
], UserSvcController.prototype, "client", void 0);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, user_agent_decorator_1.UserAgent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", rxjs_1.Observable)
], UserSvcController.prototype, "login", null);
exports.UserSvcController = UserSvcController = __decorate([
    (0, common_1.Controller)('user-svc')
], UserSvcController);
//# sourceMappingURL=user-svc.controller.js.map