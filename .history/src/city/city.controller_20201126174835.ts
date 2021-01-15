import { Controller } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';

@Controller('city')
export class CityController {

    constructor(private coreGateway: CoreGatewayService) { }
}
