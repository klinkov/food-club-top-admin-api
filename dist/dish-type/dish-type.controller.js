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
exports.DishTypeController = void 0;
const common_1 = require("@nestjs/common");
const core_gateway_service_1 = require("../core-gateway/core-gateway.service");
const DishTypeDto_1 = require("./dto/DishTypeDto");
const EditDishTypeDto_1 = require("./dto/EditDishTypeDto");
const IDeleteResponse_1 = require("../core/interfaces/IDeleteResponse");
let DishTypeController = class DishTypeController {
    constructor(coreGateway) {
        this.coreGateway = coreGateway;
    }
    async create(body) {
        console.log(body);
        const createdType = (await this.coreGateway.request('menu-dish-type-create', body)).toClass(DishTypeDto_1.DishTypeDto);
        return createdType;
    }
    async edit(id, body) {
        console.log(body);
        const editedType = (await this.coreGateway.request('menu-dish-type-edit', Object.assign({ id }, body))).toClass(DishTypeDto_1.DishTypeDto);
        return editedType;
    }
    async list() {
        const list = (await this.coreGateway
            .request('menu-dish-type-list'))
            .toClassList(DishTypeDto_1.DishTypeDto);
        return list;
    }
    async getOne(id) {
        const item = (await this.coreGateway
            .request('menu-dish-type-one', { id }))
            .toClass(DishTypeDto_1.DishTypeDto);
        return item;
    }
    async delete(id) {
        await this.coreGateway.request('menu-dish-type-delete', {
            id,
        });
        return {
            isDelete: true
        };
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EditDishTypeDto_1.EditDishTypeDto]),
    __metadata("design:returntype", Promise)
], DishTypeController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, EditDishTypeDto_1.EditDishTypeDto]),
    __metadata("design:returntype", Promise)
], DishTypeController.prototype, "edit", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DishTypeController.prototype, "list", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DishTypeController.prototype, "getOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DishTypeController.prototype, "delete", null);
DishTypeController = __decorate([
    common_1.Controller('dish-type'),
    __metadata("design:paramtypes", [core_gateway_service_1.CoreGatewayService])
], DishTypeController);
exports.DishTypeController = DishTypeController;
//# sourceMappingURL=dish-type.controller.js.map