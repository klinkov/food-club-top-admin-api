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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const core_gateway_service_1 = require("../core-gateway/core-gateway.service");
const CreateAdminDto_1 = require("./dto/CreateAdminDto");
const AdminDto_1 = require("./dto/AdminDto");
const EditAdminDto_1 = require("./dto/EditAdminDto");
let AdminController = class AdminController {
    constructor(coreGateway) {
        this.coreGateway = coreGateway;
    }
    async create(body) {
        return (await this.coreGateway.request('admin-create', body)).toClass(AdminDto_1.AdminDto);
    }
    async edit(id, body) {
        return (await this.coreGateway.request('admin-edit', Object.assign({ id }, body))).toClass(AdminDto_1.AdminDto);
    }
    async getOne(id) {
        return (await this.coreGateway
            .request('admin-one', { id }))
            .toClass(AdminDto_1.AdminDto);
    }
    async getList() {
        return (await this.coreGateway
            .request('admin-list'))
            .toClassList(AdminDto_1.AdminDto);
    }
    async delete(id) {
        (await this.coreGateway
            .request('admin-delete', { id }))
            .toPlain();
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAdminDto_1.CreateAdminDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, EditAdminDto_1.EditAdminDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "edit", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getOne", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getList", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "delete", null);
AdminController = __decorate([
    common_1.Controller('admin'),
    __metadata("design:paramtypes", [core_gateway_service_1.CoreGatewayService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map