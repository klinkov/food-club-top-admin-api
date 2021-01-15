import { Module } from '@nestjs/common';
import { CoreGatewayService } from './core-gateway.service';

@Module({
  providers: [CoreGatewayService]
})
export class CoreGatewayModule {}
