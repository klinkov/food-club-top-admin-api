"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreGatewayModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const core_gateway_service_1 = require("./core-gateway.service");
let CoreGatewayModule = class CoreGatewayModule {
};
CoreGatewayModule = __decorate([
    common_1.Global(),
    common_1.Module({
        providers: [core_gateway_service_1.CoreGatewayService, {
                provide: 'CORE_GATEWAY',
                useFactory: (configService) => {
                    return microservices_1.ClientProxyFactory.create({
                        transport: microservices_1.Transport.REDIS,
                        options: {
                            url: configService.get('REDIS').url
                        }
                    });
                },
                inject: [config_1.ConfigService],
            }],
        exports: [core_gateway_service_1.CoreGatewayService]
    })
], CoreGatewayModule);
exports.CoreGatewayModule = CoreGatewayModule;
//# sourceMappingURL=core-gateway.module.js.map