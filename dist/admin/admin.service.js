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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const core_gateway_service_1 = require("../core-gateway/core-gateway.service");
const AdminDto_1 = require("./dto/AdminDto");
let AdminService = class AdminService {
    constructor(coreGateway) {
        this.coreGateway = coreGateway;
    }
    async getOne(id) {
        return (await this.coreGateway
            .request('admin-one', { id }))
            .toClass(AdminDto_1.AdminDto);
    }
};
AdminService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_gateway_service_1.CoreGatewayService])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map