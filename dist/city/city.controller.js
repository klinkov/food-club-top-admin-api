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
exports.CityController = void 0;
const common_1 = require("@nestjs/common");
const core_gateway_service_1 = require("../core-gateway/core-gateway.service");
const CityDto_1 = require("./dto/CityDto");
let CityController = class CityController {
    constructor(coreGateway) {
        this.coreGateway = coreGateway;
    }
    async create(body) {
        const createdCity = (await this.coreGateway.request('create-city', body)).toClass(CityDto_1.CityDto);
        return createdCity;
    }
    async edit(id, body) {
        const editedCity = (await this.coreGateway.request('edit-city', Object.assign({ id }, body))).toClass(CityDto_1.CityDto);
        return editedCity;
    }
    async list(regionId) {
        const list = (await this.coreGateway
            .request('city-list', {
            regionId: Number(regionId)
        }))
            .toClassList(CityDto_1.CityDto);
        return list;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CityDto_1.CityDto]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CityDto_1.CityDto]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "edit", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('regionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "list", null);
CityController = __decorate([
    common_1.Controller('city'),
    __metadata("design:paramtypes", [core_gateway_service_1.CoreGatewayService])
], CityController);
exports.CityController = CityController;
//# sourceMappingURL=city.controller.js.map