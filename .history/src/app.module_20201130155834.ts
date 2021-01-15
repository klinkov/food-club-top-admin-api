import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreGatewayModule } from './core-gateway/core-gateway.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { RegionModule } from './region/region.module';
// import { ManagerModule } from './manager/manager.module';
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
    // ManagerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
