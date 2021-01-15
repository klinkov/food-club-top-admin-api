import { Test, TestingModule } from '@nestjs/testing';
import { DishTypeService } from './dish-type.service';

describe('DishTypeService', () => {
  let service: DishTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DishTypeService],
    }).compile();

    service = module.get<DishTypeService>(DishTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
