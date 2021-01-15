import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreGatewayModule } from './core-gateway/core-gateway.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { RegionModule } from './region/region.module';
// import { ManagerModule } from './manager/manager.module';
import { AdminModule } from './admin/admin.module';
import { BrandModule } from './brand/brand.module';
import { AuthModule } from './auth/auth.module';
import { RestaurantTypeModule } from './restaurant-type/restaurant-type.module';
import { DishTypeModule } from './dish-type/dish-type.module';
import configuration from './core/configuration';

@Module({
  imports: [
    CoreGatewayModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    CityModule,
    CountryModule,
    RegionModule,
    AdminModule,
    BrandModule,
    AuthModule,
    RestaurantTypeModule,
    DishTypeModule,
    // ManagerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
