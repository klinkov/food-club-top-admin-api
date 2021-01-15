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
exports.RegionController = void 0;
const common_1 = require("@nestjs/common");
const core_gateway_service_1 = require("../core-gateway/core-gateway.service");
const RegionDto_1 = require("./dto/RegionDto");
let RegionController = class RegionController {
    constructor(coreGateway) {
        this.coreGateway = coreGateway;
    }
    async create(body) {
        return (await this.coreGateway.request('create-region', body)).toClass(RegionDto_1.RegionDto);
    }
    async edit(id, body) {
        return (await this.coreGateway.request('edit-region', Object.assign({ id }, body))).toClass(RegionDto_1.RegionDto);
    }
    async list(countryId) {
        return (await this.coreGateway
            .request('region-list', {
            countryId: Number(countryId)
        }))
            .toClassList(RegionDto_1.RegionDto);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegionDto_1.RegionDto]),
    __metadata("design:returntype", Promise)
], RegionController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, RegionDto_1.RegionDto]),
    __metadata("design:returntype", Promise)
], RegionController.prototype, "edit", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('countryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegionController.prototype, "list", null);
RegionController = __decorate([
    common_1.Controller('region'),
    __metadata("design:paramtypes", [core_gateway_service_1.CoreGatewayService])
], RegionController);
exports.RegionController = RegionController;
//# sourceMappingURL=region.controller.js.map