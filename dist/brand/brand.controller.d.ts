import { CoreGatewayService } from 'src/core-gateway/core-gateway.service';
import { BrandDto } from './dto/BrandDto';
export declare class BrandController {
    private coreGatewayService;
    constructor(coreGatewayService: CoreGatewayService);
    getList(): Promise<BrandDto[]>;
}
