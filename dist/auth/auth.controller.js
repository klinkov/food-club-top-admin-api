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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const core_gateway_service_1 = require("../core-gateway/core-gateway.service");
const auth_service_1 = require("./auth.service");
const LoginDto_1 = require("./dto/LoginDto");
const jwt_auth_guard_1 = require("./../core/guards/jwt-auth-guard");
const admin_service_1 = require("../admin/admin.service");
let AuthController = class AuthController {
    constructor(coreGateway, authService, adminService) {
        this.coreGateway = coreGateway;
        this.authService = authService;
        this.adminService = adminService;
    }
    async login(body) {
        const { isValid, entity } = (await this.coreGateway
            .request('admin-validate', body))
            .toPlain();
        if (!isValid) {
            throw new common_1.ForbiddenException();
        }
        return {
            accessToken: this.authService.generateJWT({
                id: entity.id,
                email: entity.email
            })
        };
    }
    async auth(request) {
        const account = await this.adminService.getOne(request.user.id);
        console.log(account);
        return account;
    }
};
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginDto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "auth", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [core_gateway_service_1.CoreGatewayService,
        auth_service_1.AuthService,
        admin_service_1.AdminService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map