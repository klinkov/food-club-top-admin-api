import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreGatewayModule } from './core-gateway/core-gateway.module';

@Module({
  imports: [CoreGatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
