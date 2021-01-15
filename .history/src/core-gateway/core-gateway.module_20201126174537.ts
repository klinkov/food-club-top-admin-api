import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CoreGatewayService } from './core-gateway.service';

@Module({
  providers: [CoreGatewayService, {
    provide: 'CORE_GATEWAY',
    useFactory: (configService: ConfigService) => {
      return ClientProxyFactory.create({
        transport: Transport.REDIS,
        options: {
          url: configService.get('REDIS').url
        }
      });
    },
    inject: [ConfigService],
  ]
})
export class CoreGatewayModule { }
