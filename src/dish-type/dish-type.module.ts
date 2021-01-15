import { Module } from '@nestjs/common';
import { DishTypeController } from './dish-type.controller';
import { DishTypeService } from './dish-type.service';

@Module({
  controllers: [DishTypeController],
  providers: [DishTypeService]
})
export class DishTypeModule {}
