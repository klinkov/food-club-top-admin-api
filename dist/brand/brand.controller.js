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
exports.BrandController = void 0;
const common_1 = require("@nestjs/common");
const core_gateway_service_1 = require("../core-gateway/core-gateway.service");
const BrandDto_1 = require("./dto/BrandDto");
let BrandController = class BrandController {
    constructor(coreGatewayService) {
        this.coreGatewayService = coreGatewayService;
    }
    async getList() {
        return (await this.coreGatewayService.request('brand-list'))
            .toClassList(BrandDto_1.BrandDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getList", null);
BrandController = __decorate([
    common_1.Controller('brand'),
    __metadata("design:paramtypes", [core_gateway_service_1.CoreGatewayService])
], BrandController);
exports.BrandController = BrandController;
//# sourceMappingURL=brand.controller.js.map