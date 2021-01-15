import { Controller } from '@nestjs/common';
import { CoreGatewayService } from '../core-gateway/core-gateway.service';

@Controller('city')
export class CityController {

    constructor(private coreGateway: CoreGatewayService) { }
}
