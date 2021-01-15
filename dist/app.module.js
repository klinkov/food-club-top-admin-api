"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const core_gateway_module_1 = require("./core-gateway/core-gateway.module");
const city_module_1 = require("./city/city.module");
const country_module_1 = require("./country/country.module");
const region_module_1 = require("./region/region.module");
const admin_module_1 = require("./admin/admin.module");
const brand_module_1 = require("./brand/brand.module");
const auth_module_1 = require("./auth/auth.module");
const restaurant_type_module_1 = require("./restaurant-type/restaurant-type.module");
const dish_type_module_1 = require("./dish-type/dish-type.module");
const configuration_1 = require("./core/configuration");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            core_gateway_module_1.CoreGatewayModule,
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                isGlobal: true,
            }),
            city_module_1.CityModule,
            country_module_1.CountryModule,
            region_module_1.RegionModule,
            admin_module_1.AdminModule,
            brand_module_1.BrandModule,
            auth_module_1.AuthModule,
            restaurant_type_module_1.RestaurantTypeModule,
            dish_type_module_1.DishTypeModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map