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
exports.CoreGatewayService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const class_transformer_1 = require("class-transformer");
const operators_1 = require("rxjs/operators");
const core_gateway_const_1 = require("./core-gateway.const");
const utils_1 = require("../core/utils");
let CoreGatewayService = class CoreGatewayService {
    constructor(client) {
        this.client = client;
    }
    async request(path, data = {}) {
        const pattern = {
            cmd: path
        };
        const result = await this.client.send(pattern, utils_1.cleanObject(data))
            .pipe(operators_1.timeout(core_gateway_const_1.TIMEOUT))
            .toPromise()
            .catch((err) => {
            console.log(err);
            throw new common_1.InternalServerErrorException();
        });
        return {
            toClass: (entity) => {
                return class_transformer_1.plainToClass(entity, result);
            },
            toClassList: (entity) => {
                return class_transformer_1.plainToClass(entity, result);
            },
            toPlain: () => result
        };
    }
};
CoreGatewayService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('CORE_GATEWAY')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], CoreGatewayService);
exports.CoreGatewayService = CoreGatewayService;
//# sourceMappingURL=core-gateway.service.js.map