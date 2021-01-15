import { Module } from '@nestjs/common';
import { RestaurantTypeController } from './restaurant-type.controller';

@Module({
  controllers: [RestaurantTypeController]
})
export class RestaurantTypeModule {}
