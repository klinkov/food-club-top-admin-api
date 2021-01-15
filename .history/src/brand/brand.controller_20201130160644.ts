import { Controller } from '@nestjs/common';
import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';

@Controller('brand')
export class BrandController {
    
    constructor(private coreGatewayService: CoreGatewayService){}
}
