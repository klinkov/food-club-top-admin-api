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
exports.ManagerController = void 0;
const common_1 = require("@nestjs/common");
const core_gateway_service_1 = require("../core-gateway/core-gateway.service");
const CreateManagerDto_1 = require("./dto/CreateManagerDto");
const ManagerDto_1 = require("./dto/ManagerDto");
const EditManagerDto_1 = require("./dto/EditManagerDto");
let ManagerController = class ManagerController {
    constructor(coreGateway) {
        this.coreGateway = coreGateway;
    }
    async create(body) {
        const createdManager = (await this.coreGateway.request('manager-create', body)).toClass(ManagerDto_1.ManagerDto);
        return createdManager;
    }
    async edit(id, body) {
        const editedCity = (await this.coreGateway.request('manager-edit', Object.assign({ id }, body))).toClass(ManagerDto_1.ManagerDto);
        return editedCity;
    }
    async getOne(id) {
        const item = (await this.coreGateway
            .request('brand-one', { id }))
            .toClass(ManagerDto_1.ManagerDto);
        return item;
    }
    async getList(brandId) {
        const list = (await this.coreGateway
            .request('manager-list', {
            brandId: Number(brandId)
        }))
            .toClassList(ManagerDto_1.ManagerDto);
        return list;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateManagerDto_1.CreateManagerDto]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, EditManagerDto_1.EditManagerDto]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "edit", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "getOne", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('brandId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "getList", null);
ManagerController = __decorate([
    common_1.Controller('manager'),
    __metadata("design:paramtypes", [core_gateway_service_1.CoreGatewayService])
], ManagerController);
exports.ManagerController = ManagerController;
//# sourceMappingURL=manager.controller.js.map