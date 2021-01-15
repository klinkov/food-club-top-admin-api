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
exports.RestaurantTypeController = void 0;
const common_1 = require("@nestjs/common");
const core_gateway_service_1 = require("../core-gateway/core-gateway.service");
const RestaurantTypeDto_1 = require("./dto/RestaurantTypeDto");
const IDeleteResponse_1 = require("../core/interfaces/IDeleteResponse");
let RestaurantTypeController = class RestaurantTypeController {
    constructor(coreGateway) {
        this.coreGateway = coreGateway;
    }
    async create(body) {
        const createdType = (await this.coreGateway.request('restaurant-type-create', body)).toClass(RestaurantTypeDto_1.RestaurantTypeDto);
        return createdType;
    }
    async edit(id, body) {
        const editedType = (await this.coreGateway.request('restaurant-type-edit', Object.assign({ id }, body))).toClass(RestaurantTypeDto_1.RestaurantTypeDto);
        return editedType;
    }
    async list() {
        const list = (await this.coreGateway
            .request('restaurant-type-list'))
            .toClassList(RestaurantTypeDto_1.RestaurantTypeDto);
        return list;
    }
    async getOne(id) {
        const item = (await this.coreGateway
            .request('restaurant-type-one', { id }))
            .toClass(RestaurantTypeDto_1.RestaurantTypeDto);
        return item;
    }
    async delete(id) {
        await this.coreGateway.request('restaurant-type-delete', {
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
    __metadata("design:paramtypes", [RestaurantTypeDto_1.RestaurantTypeDto]),
    __metadata("design:returntype", Promise)
], RestaurantTypeController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, RestaurantTypeDto_1.RestaurantTypeDto]),
    __metadata("design:returntype", Promise)
], RestaurantTypeController.prototype, "edit", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantTypeController.prototype, "list", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RestaurantTypeController.prototype, "getOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RestaurantTypeController.prototype, "delete", null);
RestaurantTypeController = __decorate([
    common_1.Controller('restaurant-type'),
    __metadata("design:paramtypes", [core_gateway_service_1.CoreGatewayService])
], RestaurantTypeController);
exports.RestaurantTypeController = RestaurantTypeController;
//# sourceMappingURL=restaurant-type.controller.js.map