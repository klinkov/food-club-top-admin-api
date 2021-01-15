import { Test, TestingModule } from '@nestjs/testing';
import { CoreGatewayService } from './core-gateway.service';

describe('CoreGatewayService', () => {
  let service: CoreGatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoreGatewayService],
    }).compile();

    service = module.get<CoreGatewayService>(CoreGatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
