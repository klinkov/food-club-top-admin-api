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
exports.CountryController = void 0;
const common_1 = require("@nestjs/common");
const core_gateway_service_1 = require("../core-gateway/core-gateway.service");
const CountryDto_1 = require("./dto/CountryDto");
let CountryController = class CountryController {
    constructor(coreGateway) {
        this.coreGateway = coreGateway;
    }
    async create(body) {
        const createdCountry = (await this.coreGateway.request('create-country', body)).toClass(CountryDto_1.CountryDto);
        return createdCountry;
    }
    async edit(id, body) {
        const editedCountry = (await this.coreGateway.request('edit-country', Object.assign({ id }, body))).toClass(CountryDto_1.CountryDto);
        return editedCountry;
    }
    async list() {
        const list = (await this.coreGateway.request('country-list')).toClassList(CountryDto_1.CountryDto);
        return list;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CountryDto_1.CountryDto]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CountryDto_1.CountryDto]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "edit", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "list", null);
CountryController = __decorate([
    common_1.Controller('country'),
    __metadata("design:paramtypes", [core_gateway_service_1.CoreGatewayService])
], CountryController);
exports.CountryController = CountryController;
//# sourceMappingURL=country.controller.js.map