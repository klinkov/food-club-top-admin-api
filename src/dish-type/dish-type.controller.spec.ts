import { Test, TestingModule } from '@nestjs/testing';
import { DishTypeController } from './dish-type.controller';

describe('DishTypeController', () => {
  let controller: DishTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DishTypeController],
    }).compile();

    controller = module.get<DishTypeController>(DishTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
